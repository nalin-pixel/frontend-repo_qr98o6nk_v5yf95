import React from 'react';

export default function CTA() {
  return (
    <section id="buy" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(236,72,153,0.18),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Sound that Moves Crowds</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Preorder today and get an exclusive artist pack, extended warranty, and early access to our mixing app.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow/20 shadow-white/10 hover:bg-white/90 transition">
            Preorder for $499
          </a>
          <span className="text-white/60 text-sm">Ships in 2–3 weeks • Free returns</span>
        </div>
      </div>
    </section>
  );
}
