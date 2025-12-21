"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import createGlobe from "cobe";
import { 
  Leaf, 
  BarChart3, 
  Globe2, 
  Zap, 
  LineChart, 
  ShieldCheck,
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.03 },
        { location: [51.5074, -0.1278], size: 0.03 },
        { location: [35.6762, 139.6503], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="relative flex h-[600px] w-full items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#2D5A27] selection:text-white overflow-x-hidden">
      {/* Cinematic Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#2D5A27] to-[#B4E391] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A0A0A]">
                <Leaf className="h-6 w-6 text-[#B4E391]" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tighter sm:text-2xl">
              GROWCARBON
            </span>
          </div>

          <div className="hidden items-center gap-8 text-[13px] font-medium tracking-widest uppercase md:flex">
            <a href="#" className="text-white/60 transition-colors hover:text-white">Platform</a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">Networks</a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">Analytics</a>
            <div className="h-4 w-px bg-white/10" />
            <Button variant="ghost" className="text-[13px] tracking-widest uppercase hover:bg-white/5">Login</Button>
            <Button className="rounded-full bg-white px-6 text-[13px] font-bold tracking-widest uppercase text-black hover:bg-[#B4E391]">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Dynamic Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center pt-32">
          <motion.div 
            style={{ opacity: contentOpacity, scale: contentScale }}
            className="z-20 text-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md"
            >
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#B4E391]" />
              Infrastructure for the new economy
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mx-auto mb-8 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Mastering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4E391] via-white to-[#2D5A27]">Carbon Graph.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-white/50 md:text-xl font-light leading-relaxed"
            >
              Real-time emissions intelligence for world-scale operations. Track, model, and automate your transition with high-fidelity climate data.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <Button size="lg" className="h-16 rounded-full bg-white px-12 text-lg font-bold text-black hover:bg-[#B4E391] transition-all hover:scale-105">
                Get Started →
              </Button>
              <div className="flex items-center gap-4 text-white/40 text-sm font-medium tracking-widest uppercase">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0A0A0A] bg-neutral-800" />
                  ))}
                </div>
                Trusted by 500+ leaders
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-full translate-y-20"
          >
            <Globe />
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="relative bg-[#0A0A0A] px-6 py-40 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-1 px-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Precision Engine",
                  desc: "Sub-meter orbital intelligence for agricultural and forestry carbon tracking.",
                  icon: <Zap className="h-5 w-5" />
                },
                {
                  title: "Automated Audit",
                  desc: "Zero-touch compliance reporting for global reporting frameworks.",
                  icon: <ShieldCheck className="h-5 w-5" />
                },
                {
                  title: "Market Graph",
                  desc: "Real-time liquidity and pricing data for institutional carbon markets.",
                  icon: <BarChart3 className="h-5 w-5" />
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative h-96 overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 transition-all hover:bg-white/10"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-[#0A0A0A] text-[#B4E391]">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight">{item.title}</h3>
                  <p className="max-w-[200px] text-lg text-white/40 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.desc}
                  </p>
                  <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                      <Plus className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-white text-black py-40 px-6 md:px-12 rounded-[3rem] mx-4 mb-4">
           <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-20 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-black/50 mb-8 block">Proven Results</span>
                  <h2 className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl mb-12">
                    Scaling <br />
                    Impact at <br />
                    Velocity.
                  </h2>
                </div>
                <div className="space-y-12 lg:pb-8">
                  <div className="space-y-2">
                    <p className="text-sm font-medium opacity-40 uppercase tracking-widest">Global Capacity</p>
                    <p className="text-5xl font-bold tracking-tighter">4.2M Tons</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium opacity-40 uppercase tracking-widest">Active Verification</p>
                    <p className="text-5xl font-bold tracking-tighter">99.9% Accuracy</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium opacity-40 uppercase tracking-widest">Market Value</p>
                    <p className="text-5xl font-bold tracking-tighter">$1.8B Protected</p>
                  </div>
                </div>
              </div>
           </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="px-6 py-20 text-white/40 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-12 border-t border-white/5 pt-12 md:flex-row">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-[#B4E391]" />
                <span className="text-lg font-bold tracking-tighter text-white">GROWCARBON</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                The next generation of climate infrastructure. Built for the leaders of the low-carbon transition.
              </p>
            </div>
            <div className="flex gap-20 text-xs font-bold tracking-[0.2em] uppercase">
              <div className="space-y-4">
                <p className="text-white">Product</p>
                <div className="flex flex-col gap-3">
                  <a href="#">Engine</a>
                  <a href="#">Markets</a>
                  <a href="#">API</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-white">Legal</p>
                <div className="flex flex-col gap-3">
                  <a href="#">Privacy</a>
                  <a href="#">Terms</a>
                  <a href="#">Ethics</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 text-[10px] tracking-[0.3em] uppercase opacity-20">
            © 2024 GROWCARBON INC / PLANETARY SCALE INFRASTRUCTURE
          </div>
        </div>
      </footer>
    </div>
  );
}
