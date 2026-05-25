const clientVoices = [
  {
    id: "01",
    quote:
      "Strong ownership mindset and very reliable delivery across both frontend and backend tasks.",
    name: "Internship Team Lead",
    role: "Product Engineering",
  },
  {
    id: "02",
    quote:
      "Sodbilegt adapts quickly and ships clean implementation with practical architecture decisions.",
    name: "Senior Mentor",
    role: "Full-Stack Development",
  },
  {
    id: "03",
    quote:
      "Consistent, detail-oriented, and easy to collaborate with under deadlines.",
    name: "Project Collaborator",
    role: "Web Platform Team",
  },
];

export function TestimonialsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="void-heading void-section-title text-5xl font-medium uppercase text-zinc-100 md:text-[4.75rem]">
          Happy Clients
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {clientVoices.map((item) => (
          <article key={item.id} className="void-card p-6">
            <p className="void-eyebrow text-xs uppercase">{item.id}</p>
            <p className="void-copy mt-4 text-sm">{item.quote}</p>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.13em] text-zinc-100">{item.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
