import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400 backdrop-blur">
            Elevating products with code & creativity
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
            Build bold software with a team you can trust
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-300 sm:text-lg">
            We design, develop, and scale modern web & mobile experiences. Fast delivery, pixel-perfect UI, and robust backends.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
