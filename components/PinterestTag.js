"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PINTEREST_TAG_ID = process.env.NEXT_PUBLIC_PINTEREST_TAG_ID;
const PINTEREST_SCRIPT_SRC = "https://s.pinimg.com/ct/core.js";
const PAGE_VISIT_PATHS = new Set(["/moon-reading/", "/soulmate-sketch/"]);

function normalizePathname(pathname) {
  if (!pathname) {
    return "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function loadPinterestTag(tagId) {
  if (typeof window.pintrk !== "function") {
    window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments));
    };
    window.pintrk.queue = [];
    window.pintrk.version = "3.0";
  }

  if (!document.querySelector(`script[src="${PINTEREST_SCRIPT_SRC}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = PINTEREST_SCRIPT_SRC;

    const firstScript = document.getElementsByTagName("script")[0];

    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  if (window.__moonlitPinterestTagId !== tagId) {
    window.pintrk("load", tagId);
    window.__moonlitPinterestTagId = tagId;
  }
}

export default function PinterestTag() {
  const pathname = usePathname();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    if (!PINTEREST_TAG_ID || typeof window === "undefined") {
      return;
    }

    loadPinterestTag(PINTEREST_TAG_ID);

    if (typeof window.pintrk !== "function") {
      return;
    }

    const normalizedPathname = normalizePathname(pathname);

    if (lastTrackedPath.current === normalizedPathname) {
      return;
    }

    lastTrackedPath.current = normalizedPathname;
    window.pintrk("page");

    if (PAGE_VISIT_PATHS.has(normalizedPathname)) {
      window.pintrk("track", "pagevisit", {
        page_path: window.location.pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!PINTEREST_TAG_ID || typeof window === "undefined") {
      return;
    }

    const handleClick = (event) => {
      const link =
        event.target instanceof Element ? event.target.closest("a[href]") : null;

      if (!link || !link.href.includes("hop.clickbank.net")) {
        return;
      }

      if (typeof window.pintrk === "function") {
        window.pintrk("track", "lead", {
          lead_type: "affiliate_click",
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
