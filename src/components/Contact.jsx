import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something great</h2>
            <p className="mt-3 max-w-xl text-gray-300">
              Tell us about your goals, timeline, and budget. We’ll get back within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li><span className="font-semibold text-white">Email:</span> hello@yourstudio.dev</li>
              <li><span className="font-semibold text-white">HQ:</span> Remote-first, global team</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-gray-500 focus:border-orange-500"
                  placeholder="Jane Cooper"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-gray-500 focus:border-orange-500"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-gray-300">Project brief</label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-gray-500 focus:border-orange-500"
                  placeholder="What are you building and why?"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-400"
            >
              Request proposal
            </button>
            <p className="mt-3 text-xs text-gray-400">By submitting, you agree to our terms and privacy policy.</p>
          </form>
        </div>
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Studio — All rights reserved.
        </div>
      </div>
    </section>
  );
}
