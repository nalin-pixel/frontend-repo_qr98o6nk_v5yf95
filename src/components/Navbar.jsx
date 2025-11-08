import React from 'react';
import { Music, SpeakerHigh, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur">
            <SpeakerHigh className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-tight">PulseSound</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#sound" className="hover:text-white transition">Sound</a>
          <a href="#buy" className="hover:text-white transition">Buy</a>
          <a
            href="#buy"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-gray-900 shadow/20 shadow-white/10 transition hover:bg-white/90"
          >
            <Music className="h-4 w-4" /> Listen Demo
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/10 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
