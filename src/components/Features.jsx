import React from 'react';
import { Zap, Bluetooth, Battery, Waveform } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '1200W Peak Power',
    desc: 'Room-shaking output with zero distortion and crisp highs.'
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth 5.3 + Low Latency',
    desc: 'Seamless wireless streaming and stage-ready sync.'
  },
  {
    icon: Battery,
    title: 'All-night Battery',
    desc: 'Up to 18 hours of continuous play on a single charge.'
  },
  {
    icon: Waveform,
    title: 'Studio-grade DSP',
    desc: 'Adaptive EQ and spatial audio for immersive sound.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Engineered for Performance</h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">Every detail crafted for clarity, power, and control — whether you’re on stage or at home.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur hover:bg-white/10 transition">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
