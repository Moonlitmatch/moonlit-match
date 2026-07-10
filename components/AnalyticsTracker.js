"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PIN_STORAGE_KEY = "mm_pin_id";
const PIN_ID_PATTERN = /^[A-Za-z0-9_-]{1,80}$/;
const CLICKBANK_DOMAIN = "hop.clickbank.net";

const BRIDGE_OFFERS = {
  "/moon-reading/": "moon-reading",
  "/soulmate-sketch/": "soulmate-sketch",
};

function normalizePathname(pathname) {
  if (!pathname) {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function sanitizePinId(value) {
  const pinId = value?.trim();

  if (!pinId || !PIN_ID_PATTERN.test(pinId)) {
    return "";
  }

  return pinId;
}

function readStoredPinId() {
  try {
    return sanitizePinId(window.sessionStorage.getItem(PIN_STORAGE_KEY));
  } catch {
    return "";
  }
}

function storePinId(pinId) {
  if (!pinId) {
    return;
  }

  try {
    window.sessionStorage.setItem(PIN_STORAGE_KEY, pinId);
  } catch {
    // Storage can be unavailable in some privacy modes.
  }
}

function getDestinationDomain(href) {
  try {
    return new URL(href).hostname;
  } catch {
    return "";
  }
}

function getCtaText(link) {
  const label =
    link.textContent?.replace(/\s+/g, " ").trim() ||
    link.getAttribute("aria-label")?.trim() ||
    link.dataset.ctaLocation ||
    "affiliate link";

  return label.slice(0, 120);
}

function sendAnalyticsEvent(eventName, parameters) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  sendGAEvent("event", eventName, parameters);
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastBridgeEventKey = useRef("");

  const pinFromUrl = useMemo(
    () => sanitizePinId(searchParams.get("pin")),
    [searchParams],
  );

  const currentPinId = useMemo(() => {
    return pinFromUrl || readStoredPinId();
  }, [pinFromUrl]);

  useEffect(() => {
    storePinId(pinFromUrl);
  }, [pinFromUrl]);

  useEffect(() => {
    const normalizedPathname = normalizePathname(pathname);
    const offer = BRIDGE_OFFERS[normalizedPathname];

    if (!offer) {
      return;
    }

    const pinId = currentPinId || "unknown";
    const eventKey = `${normalizedPathname}:${pinId}`;

    if (lastBridgeEventKey.current === eventKey) {
      return;
    }

    lastBridgeEventKey.current = eventKey;

    sendAnalyticsEvent("bridge_page_view", {
      pin_id: pinId,
      offer,
      page_path: normalizedPathname,
    });
  }, [currentPinId, pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const link =
        event.target instanceof Element ? event.target.closest("a[href]") : null;

      if (!link || !link.href.includes(CLICKBANK_DOMAIN)) {
        return;
      }

      const normalizedPathname = normalizePathname(window.location.pathname);
      const offer =
        link.dataset.offer || BRIDGE_OFFERS[normalizedPathname] || "unknown";

      sendAnalyticsEvent("affiliate_click", {
        pin_id: readStoredPinId() || currentPinId || "unknown",
        offer,
        page_path: normalizedPathname,
        destination_domain: getDestinationDomain(link.href),
        cta_text: getCtaText(link),
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [currentPinId]);

  return null;
}
