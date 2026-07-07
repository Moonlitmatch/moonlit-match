export default function FAQ({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
        >
          <h3 className="text-base font-semibold text-white">{item.question}</h3>
          <p className="mt-3 text-sm leading-6 text-white/64">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
