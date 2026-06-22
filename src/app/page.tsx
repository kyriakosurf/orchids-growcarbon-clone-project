"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-green-500/30 font-sans selection:text-green-400 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-white flex items-center justify-center">
             <Sprout className="w-5 h-5 text-black" />
          </div>
          <span className="text-sm font-black tracking-tighter uppercase">Grow Carbon</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/portal">
            <Button className="h-10 rounded bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 text-black px-8 transition-all">
              Explore Platform
              <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-green-500/5 border border-green-500/20">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-green-500">Infrastructure Layer Active</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85]">
                  The Foundation of<br />
                  <span className="text-white/40 italic">Industrial</span><br />
                  Regeneration.
                </h1>
                <p className="max-w-2xl text-xl text-white/50 leading-relaxed font-medium">
                  Grow Carbon is architecting a decentralized network of organic resource management hubs. We transform biological liabilities into stabilized assets using hyper-efficient conversion technology and immutable digital traceability.
                </p>
              </div>

              <div className="grid gap-6 max-w-md">
                {[
                  { icon: <Zap className="w-5 h-5" />, title: "Instant Conversion", desc: "Source-to-asset bio-transformation in record cycles." },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: "Verifiable Impact", desc: "Wastecloud™ traceability for transparent ESG reporting." },
                  { icon: <Globe2 className="w-5 h-5" />, title: "Global Scale", desc: "Infrastructure designed for planetary resource resilience." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="shrink-0 h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-white/40 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/portal">
                <Button size="lg" className="h-16 rounded bg-green-600 text-white hover:bg-green-500 transition-all font-bold px-10 group text-[11px] uppercase tracking-widest">
                  Explore the Platform
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col p-12 justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
              <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">Our Mission</span>
                  <h3 className="text-3xl font-bold italic tracking-tighter">Turning organic liability into the foundational asset of the circular economy.</h3>
                </div>
                <div className="h-px w-20 bg-green-500" />
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-3xl font-black">142</p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">Hubs Deployed</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-black">8.4M</p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">Tons Diverted</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-40 py-16 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-white flex items-center justify-center">
                <Sprout className="w-4 h-4 text-black" />
              </div>
              <span className="text-sm font-black tracking-tighter uppercase">Grow Carbon</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Node-GCRB Status: Nominal</span>
            </div>
            <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">© 2024 GROW CARBON INFRASTRUCTURE GROUP</span>
          </div>
        </footer>
      </main>
    </div>
  );
}