import React from 'react';

const projects = [
  {
    tag: 'Fintech',
    title: 'Realtime Trading Dashboard',
    desc: 'Low-latency streaming charts and order management.',
  },
  {
    tag: 'SaaS',
    title: 'AI Content Platform',
    desc: 'Collaborative editor, billing, and analytics at scale.',
  },
  {
    tag: 'E‑commerce',
    title: 'Headless Storefront',
    desc: 'Blazing-fast storefront with personalized experiences.',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Selected work</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            A glimpse of the products we’ve shipped with our partners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-6"
            >
              <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-neutral-800">
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.18),transparent_50%)] transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
