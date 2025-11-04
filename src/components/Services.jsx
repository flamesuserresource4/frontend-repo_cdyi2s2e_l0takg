import React from 'react';
import { Code, Rocket, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: <Rocket className="h-6 w-6 text-orange-400" />,
    title: 'Product Strategy',
    desc: 'Discovery, roadmapping, and rapid prototyping to validate ideas fast.'
  },
  {
    icon: <Code className="h-6 w-6 text-orange-400" />,
    title: 'Full‑Stack Development',
    desc: 'High-performance web & mobile apps with clean, scalable architectures.'
  },
  {
    icon: <Palette className="h-6 w-6 text-orange-400" />,
    title: 'UX/UI Design',
    desc: 'Human-centered interfaces with a sharp visual language and motion.'
  },
  {
    icon: <Shield className="h-6 w-6 text-orange-400" />,
    title: 'DevOps & Security',
    desc: 'CI/CD, cloud infrastructure, and best practices baked into every release.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              From idea to launch, we partner with you to build reliable, delightful software.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-500/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-md bg-orange-500/10 p-3">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
