import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">Pro DJ Speaker</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Feel the Pulse. Hear the Future.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Immersive 3D sound with studio-grade clarity. Tap, drag, and explore the interactive model. Designed for performers, perfected for listeners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 font-semibold shadow/20 shadow-white/10 hover:bg-white/90 transition">Preorder Now</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/20 transition">Learn More</a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
