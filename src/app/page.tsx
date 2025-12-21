"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Globe2, 
  Database, 
  Terminal, 
  Cpu, 
  Network, 
  Layers, 
  BarChart3, 
  RefreshCcw,
  Zap,
  Activity,
  ArrowRight,
  Maximize2,
  Box,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MaterialGraph = () => {
  return (
    <div className="relative h-[400px] w-full border border-white/5 rounded-2xl bg-black/40 overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-500/80">Active Material Flow</span>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-mono text-white/40 tracking-wider">LHR</div>
            <div className="h-6 w-12 rounded bg-white/5 flex items-center justify-center text-[10px] font-mono text-white/40 tracking-wider">HKG</div>
          </div>
        </div>

        <div className="flex-1 relative">
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 200">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              d="M 50 150 Q 200 50 350 150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div 
            animate={{ x: [50, 200, 350], y: [150, 50, 150], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 h-4 w-4 bg-emerald-400 rounded-full blur-md"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {[
            { label: "Purity", value: "98.2%" },
            { label: "Latency", value: "14ms" },
            { label: "State", value: "Liquid" },
            { label: "Yield", value: "94.8%" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</p>
              <p className="text-sm font-mono text-white/80">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BENTO_CARDS = [
  {
    title: "Digital Product Passports",
    desc: "W3C-compliant DIDs for trillions of items across global supply chains.",
    icon: <Box className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-blue-500/10 to-emerald-500/10"
  },
  {
    title: "Reverse Logistics Intelligence",
    desc: "Predictive modeling for material recovery and secondary markets.",
    icon: <RefreshCcw className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-emerald-500/10 to-teal-500/10"
  },
  {
    title: "Real-time Material State Tracking",
    desc: "Monitor material composition, purity, and location through the entire lifecycle via satellite and IoT mesh networks.",
    icon: <Database className="w-5 h-5" />,
    colSpan: "col-span-2",
    bg: "from-blue-600/10 via-emerald-600/10 to-transparent"
  },
  {
    title: "Automated Compliance",
    desc: "Audit-ready reporting for EU DPP, CSRD, and global circularity mandates.",
    icon: <Terminal className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-zinc-500/10 to-zinc-800/10"
  },
  {
    title: "Global Material Graph",
    desc: "A unified system of record for planetary resource flows.",
    icon: <Network className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-blue-400/10 to-indigo-400/10"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-emerald-500/30 font-[family-name:var(--font-geist-sans)] selection:text-emerald-400">
      {/* OS Interface Shell */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[1px] border-white/5 mix-blend-overlay opacity-50" />
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150" />

      {/* Global Status Bar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center overflow-hidden">
               <Layers className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-black tracking-tighter leading-none">CEI-OS</span>
              <span className="text-[9px] font-bold text-emerald-500/60 uppercase tracking-widest mt-0.5">V1.4.2 ALPHA</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Infrastructure', 'Registry', 'Analytics', 'Terminal'].map((item) => (
              <a key={item} href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 mr-6">
             <div className="flex flex-col items-end">
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Network Load</span>
               <div className="flex gap-0.5 mt-1">
                 {[1,2,3,4,5,6,7,8].map(i => (
                   <div key={i} className={`h-1 w-1 rounded-full ${i < 5 ? 'bg-emerald-500/50' : 'bg-white/10'}`} />
                 ))}
               </div>
             </div>
          </div>
          <Button variant="outline" className="h-9 rounded-lg border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-wider hover:bg-white/10 text-white px-6">
            Log Terminal
          </Button>
          <Button className="h-9 rounded-lg bg-emerald-500 text-[11px] font-bold uppercase tracking-wider hover:bg-emerald-400 text-black px-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Deploy Node
          </Button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        {/* Core Engine Hero */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20"
              >
                <Monitor className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">System Ready: 1.8PB Data Ingested</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] text-white"
              >
                The Operating System for a <br />
                <span className="text-emerald-500 italic">Circular Planet.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-xl text-lg text-white/50 leading-relaxed font-medium"
              >
                CEI-OS provides the industrial-grade protocols to track, manage, and monetize every atom in your supply chain. From linear waste to circular value.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="h-14 rounded-xl bg-white text-black hover:bg-emerald-500 transition-all font-bold group">
                  Initialize Infrastructure 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold px-8">
                  View Registry Docs
                </Button>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                {[
                  { value: '42K+', label: 'Nodes Active' },
                  { value: '1.2B', label: 'Assets Tracked' },
                  { value: '0.04ms', label: 'Flow Latency' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl font-black tabular-nums">{stat.value}</p>
                    <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square lg:aspect-auto h-full min-h-[500px]"
            >
              <MaterialGraph />
              <div className="absolute -bottom-10 -right-10 flex flex-col gap-4">
                 <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl space-y-4 max-w-[240px]">
                    <div className="flex items-center gap-2">
                       <Database className="w-4 h-4 text-emerald-500" />
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Inventory State</span>
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            className="h-full bg-emerald-500"
                          />
                       </div>
                       <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-white/40">Circular Flow</span>
                          <span>75.2%</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature OS Grid */}
        <section className="space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Kernel Modules</span>
              <h2 className="text-4xl font-bold tracking-tight">System Infrastructure</h2>
            </div>
            <p className="max-w-xs text-sm text-white/30 text-right hidden sm:block">
              Modular protocols built for resilience, scalability, and cryptographic proof of circularity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENTO_CARDS.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`${card.colSpan} group relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 transition-all hover:border-emerald-500/40`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors uppercase italic">{card.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform">
                     <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest cursor-pointer hover:underline">Download Module JSON →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Console / Terminal Section */}
        <section className="rounded-[40px] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-12 lg:p-20 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity className="w-64 h-64 text-emerald-500" />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div className="space-y-8">
                 <div className="bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-emerald-500/20">
                    <Terminal className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Planetary Command Line</span>
                 </div>
                 <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
                   Programmable <br />
                   Resource Flow.
                 </h2>
                 <p className="text-white/50 text-xl font-medium max-w-md">
                   Use our SDK to define smart material contracts that automatically trigger reverse logistics when lifecycle thresholds are met.
                 </p>
                 <div className="space-y-4 pt-4">
                    {[
                      'Immutable Ledger Integration',
                      'Proprietary Material Fingerprinting',
                      'Global Settlement Engine'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                         <span className="text-sm font-bold text-white/80 uppercase tracking-wider">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-black/80 p-6 font-mono text-[13px] shadow-2xl relative overflow-hidden group/console">
                 <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                    <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover/console:bg-red-500 transition-colors" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover/console:bg-yellow-500 transition-colors" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover/console:bg-green-500 transition-colors" />
                    </div>
                    <span className="text-white/20 text-[10px] uppercase tracking-widest">cei-os-session.bash</span>
                 </div>
                 <div className="space-y-3 opacity-90">
                    <div className="flex gap-4">
                       <span className="text-emerald-500/60">$</span>
                       <span className="text-white/40">initiating material_graph_query</span>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-white/20">...</span>
                       <span className="text-emerald-400">found 4.2M metric tons active PET</span>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-emerald-500/60">$</span>
                       <span className="text-white/40">analyze recovery_yield --region EU-NORTH</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-8">
                       <div className="flex justify-between w-full">
                          <span className="text-emerald-400/80">Recyclability:</span>
                          <span className="text-white/60">88.2%</span>
                       </div>
                       <div className="flex justify-between w-full">
                          <span className="text-emerald-400/80">Value Retention:</span>
                          <span className="text-white/60">$1.24B</span>
                       </div>
                       <div className="flex justify-between w-full">
                          <span className="text-emerald-400/80">CO2 Avoided:</span>
                          <span className="text-white/60">124K Tons</span>
                       </div>
                    </div>
                    <div className="flex gap-4 animate-pulse">
                       <span className="text-emerald-500/60">$</span>
                       <span className="h-4 w-2 bg-emerald-500" />
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* OS Footer */}
      <footer className="border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
           <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="h-6 w-6 rounded bg-emerald-500 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-black" />
                 </div>
                 <span className="text-lg font-black tracking-tighter">CEI-OS</span>
              </div>
              <p className="max-w-xs text-sm text-white/30 font-medium leading-relaxed">
                Planet-scale material intelligence. Built for the transition to a waste-free economy.
              </p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">System</h4>
                 <div className="flex flex-col gap-4 text-sm font-bold text-white/40">
                    <a href="#" className="hover:text-emerald-400 transition-colors">Kernel</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Material Node</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Registry</a>
                 </div>
              </div>
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Registry</h4>
                 <div className="flex flex-col gap-4 text-sm font-bold text-white/40">
                    <a href="#" className="hover:text-emerald-400 transition-colors">Verification</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Passports</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a>
                 </div>
              </div>
              <div className="space-y-6 hidden lg:block">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Legal</h4>
                 <div className="flex flex-col gap-4 text-sm font-bold text-white/40">
                    <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Protocols</a>
                 </div>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
           <span>© 2024 CEI-OS / INFRASTRUCTURE FOR A CIRCULAR PLANET</span>
           <span>Distributed System Status: Nominal</span>
        </div>
      </footer>
    </div>
  );
}
