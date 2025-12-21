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
  Monitor,
  Sprout,
  Coins,
  ShieldCheck,
  Factory,
  TrendingUp,
  Users,
  Droplets,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MaterialGraph = () => {
  return (
    <div className="relative h-[400px] w-full border border-white/5 rounded-2xl bg-[#050505] overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-500/80">Active Bio-Conversion Flow</span>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded bg-white/5 flex items-center justify-center text-[9px] font-mono text-white/40 tracking-wider uppercase">Hub-012</div>
            <div className="h-6 w-16 rounded bg-white/5 flex items-center justify-center text-[9px] font-mono text-white/40 tracking-wider uppercase">Region-A</div>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center">
          <svg className="w-full h-full opacity-60" viewBox="0 0 400 200">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              d="M 50 150 C 150 150 100 50 200 50 S 250 150 350 150"
              fill="none"
              stroke="url(#gradient-green)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div 
            animate={{ 
              x: [50, 100, 200, 300, 350], 
              y: [150, 100, 50, 100, 150], 
              opacity: [0, 1, 1, 1, 0] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-4 w-4 bg-green-400 rounded-full blur-md"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {[
            { label: "CO2e Enabled", value: "1,240t" },
            { label: "Hub Efficiency", value: "98.4%" },
            { label: "Soil Purity", value: "A-Grade" },
            { label: "Verification", value: "System-Synch" }
          ].map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</p>
              <p className="text-xs font-mono text-white/80">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TECH_STACK = [
  {
    title: "Bio Hub Network",
    category: "Physical Infrastructure",
    desc: "A standardized network of advanced modular hubs utilizing high-efficiency compost systems to convert organic matter into stabilized soil assets.",
    icon: <Factory className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Verification Technology",
    category: "Digital Layer",
    desc: "Our proprietary technology provides real-time traceability and verification, ensuring granular data on nutrient flow and soil health metrics.",
    icon: <HardDrive className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-blue-500/10 to-green-500/10"
  },
  {
    title: "Compost & Carbon Initiatives",
    category: "Market Enablement",
    desc: "We enable the sale of stabilized compost through partnerships with food companies and the development of high-integrity carbon farming initiatives.",
    icon: <Coins className="w-5 h-5" />,
    colSpan: "col-span-1",
    bg: "from-yellow-500/10 to-green-500/10"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-green-500/30 font-[family-name:var(--font-geist-sans)] selection:text-green-400">
      {/* UI Shell */}
      <div className="fixed inset-0 pointer-events-none z-[100] border-[1px] border-white/5 mix-blend-overlay opacity-30" />
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-125" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-white flex items-center justify-center overflow-hidden">
               <Sprout className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter uppercase">Grow Carbon</span>
              <span className="text-[8px] font-bold text-green-500 uppercase tracking-widest leading-none mt-1">Industrial Regeneration</span>
            </div>
          </div>
              <div className="hidden lg:flex items-center gap-10">
                {['Bio Hub Network', 'Technology', 'Initiatives', 'Investors'].map((item) => (
                  <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors">{item}</a>
                ))}
              </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-6 mr-6 border-r border-white/10 pr-6">
             <div className="flex flex-col items-end">
               <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Global Carbon Sync</span>
               <div className="flex items-center gap-2 mt-1">
                  <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                    <motion.div animate={{ width: ["20%", "85%", "20%"] }} transition={{ duration: 10, repeat: Infinity }} className="h-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-mono text-green-500">NOMINAL</span>
               </div>
             </div>
          </div>
          <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 px-4 h-10">
            Access Portal
          </Button>
          <Button className="h-10 rounded bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 text-black px-8 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Partner With Us
          </Button>
        </div>
      </nav>

      <main className="pt-40 max-w-7xl mx-auto space-y-40 px-6">
        {/* HERO SECTION */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded bg-green-500/5 border border-green-500/20"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-green-500">Status: Infrastructure Layer Active</span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85]"
                >
                  Regenerative <br />
                  <span className="text-white/40 italic">Infrastructure</span> <br />
                  Hub Network.
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-xl text-xl text-white/50 leading-relaxed font-medium"
                >
                  We are setting up a global bio hub network to transform organic liability into high-value stabilized compost, enabling the next generation of carbon farming.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button size="lg" className="h-16 rounded bg-green-600 text-white hover:bg-green-500 transition-all font-bold px-10 group text-[11px] uppercase tracking-widest">
                  Join The Network
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 rounded border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold px-10 text-[11px] uppercase tracking-widest">
                   Institutional Deck
                </Button>
              </motion.div>

              <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5">
                {[
                  { value: '142', label: 'Hubs Deployed' },
                  { value: '8.4M', label: 'Tons Diverted' },
                  { value: '$124M', label: 'EBITDA Enablement' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <MaterialGraph />
              <div className="absolute -bottom-6 -left-6 lg:p-10 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur border border-white/10 shadow-3xl space-y-6 max-w-[280px]">
                 <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Yield Performance</span>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-mono text-white/60">
                          <span>Organic Conversion</span>
                          <span className="text-green-400">99.1%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "99%" }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-green-500" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-mono text-white/60">
                          <span>Carbon Purity</span>
                          <span className="text-green-400">High-Fidelity</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} transition={{ delay: 1.2, duration: 1.5 }} className="h-full bg-green-400" />
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="py-20 border-y border-white/5">
           <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">The Problem</span>
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">The Broken Loop</h2>
                 <p className="text-white/40 text-xl leading-relaxed max-w-xl">
                   Global food systems are operating as a one-way extraction. Waste creates a multi-billion dollar liability for municipalities, while primary agricultural soils face total collapse.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="space-y-4">
                       <div className="h-12 w-12 rounded bg-red-500/10 flex items-center justify-center text-red-500">
                          <Activity className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-sm uppercase tracking-wider">Waste Liability</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Billions of tons of organic matter buried in landfills annually, emitting methane and draining municipal budgets.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="h-12 w-12 rounded bg-red-500/10 flex items-center justify-center text-red-500">
                          <Droplets className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-sm uppercase tracking-wider">Soil Collapse</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Industrial farming has depleted 50% of topsoil health, endangering global food security and planetary water cycles.</p>
                    </div>
                 </div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col p-12 justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="space-y-6 relative z-10">
                    <h3 className="text-3xl font-bold italic tracking-tighter">"The linear model is a financial and ecological dead end."</h3>
                    <div className="h-px w-20 bg-red-500" />
                    <p className="text-sm text-white/60 font-medium">We transition from Liability management to Asset creation by closing the nutrient loop at industrial scale.</p>
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_60s_linear_infinite]">
                       <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" />
                    </svg>
                 </div>
              </div>
           </div>
        </section>

        {/* SOLUTION: THE 3-LAYER TECH STACK */}
        <section className="space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500">The Bio-Conversion Engine</span>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">The 3-Layer Tech Stack</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Operating at the intersection of biology, software, and finance to deploy essential regenerative infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECH_STACK.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#080808] p-10 transition-all hover:border-green-500/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                    {card.icon}
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">{card.category}</p>
                      <h3 className="text-2xl font-bold tracking-tight italic">{card.title}</h3>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex items-center justify-between border-t border-white/5">
                     <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Learn More</span>
                     <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-green-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

          {/* VERIFICATION & TRUST: ANALYTICS TECHNOLOGY */}
          <section className="rounded-[60px] bg-gradient-to-br from-[#0c0c0c] to-black border border-white/5 p-12 lg:p-24 relative overflow-hidden group">
             <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full border border-white/5 animate-[pulse_10s_ease-in-out_infinite]" />
             </div>
             
             <div className="grid lg:grid-cols-2 gap-24 relative z-10">
                <div className="space-y-10">
                   <div className="bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full inline-flex items-center gap-2 border border-blue-500/20">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Deep Tech KPIs: Core Technology</span>
                   </div>
                 <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                   Catalytic <br />
                   Verification.
                 </h2>
                 <p className="text-white/40 text-xl font-medium max-w-lg leading-relaxed">
                   Inspired by the Frontier model, we enable advanced market commitments for regenerative soil. Our technology provides the immutable data needed to de-risk high-integrity carbon removal.
                 </p>
                   <div className="grid grid-cols-2 gap-x-12 gap-y-6 pt-6">
                      {[
                        'Real-time Nutrient Analysis',
                        'Satellite Carbon Auditing',
                        'IoT Bio-Hub Mesh',
                        'Fractional Asset Registry'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/item cursor-pointer">
                           <div className="h-px w-4 bg-green-500/50 group-hover/item:w-8 transition-all" />
                           <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>

              <div className="rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur shadow-2xl relative overflow-hidden group/console">
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <div className="flex gap-2">
                       <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Live Data Stream</span>
                    </div>
                     <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                       <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest underline underline-offset-4 cursor-pointer">Infrastructure Hub v2.01</span>
                    </div>
                 </div>
                 <div className="space-y-6 font-mono text-[12px]">
                    <div className="p-4 rounded bg-white/5 border border-white/5 space-y-3">
                       <div className="flex justify-between">
                          <span className="text-white/40">Timestamp</span>
                          <span>2024.10.24 14:24:01</span>
                       </div>
                       <div className="flex justify-between">
                          <span className="text-white/40">Hub ID</span>
                          <span className="text-blue-400">HUB-TX-441-A</span>
                       </div>
                    </div>
                    
                    <div className="space-y-4 pl-2 border-l border-white/10">
                       <div className="flex items-center gap-4">
                          <div className="h-10 w-full relative bg-white/5 rounded overflow-hidden">
                             <motion.div animate={{ width: ["10%", "92%", "88%"] }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-gradient-to-r from-blue-500 to-green-500" />
                             <span className="absolute inset-y-0 left-3 flex items-center text-[9px] font-bold text-white/80 uppercase">Sequestration Rate</span>
                          </div>
                          <span className="text-white/60">0.94t/h</span>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="h-10 w-full relative bg-white/5 rounded overflow-hidden">
                             <motion.div animate={{ width: ["40%", "75%", "70%"] }} transition={{ duration: 7, repeat: Infinity }} className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                             <span className="absolute inset-y-0 left-3 flex items-center text-[9px] font-bold text-white/80 uppercase">Nutrient Purity</span>
                          </div>
                          <span className="text-white/60">98.2%</span>
                       </div>
                    </div>
                    
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                       <span className="text-blue-500/60">$</span>
                       <span className="text-white/40">generating_soil_carbon_certificate...</span>
                    </div>
                    <div className="h-px w-full bg-white/5" />
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-green-500">
                       <span>Certificate #441-A-Z</span>
                       <span>DEEP TRUST SECURE</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* THE INVESTMENT MODEL */}
        <section className="space-y-20 py-20">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="grid grid-cols-2 gap-4">
                    {[
                       { label: 'Asset IRR', value: '18-24%', icon: <TrendingUp className="w-4 h-4" /> },
                       { label: 'Payback Period', value: '3.2 yrs', icon: <Zap className="w-4 h-4" /> },
                       { label: 'Contract Length', value: '10+ yrs', icon: <Database className="w-4 h-4" /> },
                       { label: 'ESG Alpha', value: 'Premium', icon: <ShieldCheck className="w-4 h-4" /> },
                    ].map((stat, i) => (
                       <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4">
                          <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40">
                             {stat.icon}
                          </div>
                          <div className="space-y-1">
                             <p className="text-2xl font-bold italic">{stat.value}</p>
                             <p className="text-[9px] font-black uppercase tracking-widest text-white/30">{stat.label}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="order-1 lg:order-2 space-y-10">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">Financial Sophistication</span>
                 <h2 className="text-5xl font-bold tracking-tight">Localized Infrastructure Returns.</h2>
                 <p className="text-white/40 text-xl leading-relaxed">
                   We provide infrastructure investors with de-risked, long-term yields backed by municipal waste contracts and high-margin carbon removal markets.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Liability Arbitrage</h4>
                          <p className="text-xs text-white/30 font-medium">Capture the spread between tipping fees and soil amendment sales price.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                       </div>
                         <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">CORC Enablement</h4>
                            <p className="text-xs text-white/30 font-medium">Enable the development of high-integrity carbon credits that command institutional price premiums through stabilized compost.</p>
                         </div>
                    </div>
                 </div>
                 <Button className="h-14 px-10 rounded-full bg-white text-black hover:bg-green-500 transition-all font-black text-[10px] uppercase tracking-widest">
                    Request Investment Framework
                 </Button>
              </div>
           </div>
        </section>

        {/* STAKEHOLDERS SECTION */}
        <section className="bg-white/[0.02] border border-white/5 rounded-[50px] p-12 lg:p-24 space-y-20">
           <div className="max-w-3xl space-y-6">
             <h2 className="text-4xl lg:text-5xl font-bold tracking-tight italic uppercase">Building Value Across the Regenerative Economy.</h2>
             <p className="text-white/40 text-xl font-medium">A multi-stakeholder model optimized for planetary and financial success.</p>
           </div>
           
               <div className="grid md:grid-cols-3 gap-12">
                {[
                   { 
                     role: "Producers & Municipalities", 
                     desc: "Do you have bio waste in your city, area or activity and nowhere to recycle them? Our biohubs are solving local organic waste management infrastructure gaps and are helping local producers adopt circular economy practices.",
                     benefit: "60% Reduction in Disposal Tipping Fees",
                     icon: <Box className="w-8 h-8" />
                   },
                   { 
                     role: "Multinational Food & Agri-Chem", 
                     desc: "Big organic waste producers, multinational food companies and agri sector chemical companies can support the transition to a climate resilient and regenerative food production system by supporting the development of our Bio-HUB network.",
                     benefit: "Regenerative System Transition",
                     icon: <Globe2 className="w-8 h-8" />
                   },
                   { 
                     role: "Food Companies & Carbon Buyers", 
                     desc: "Are you a food company needing to reach specific climate performance? Supporting our Bio-HUB development enables high-value carbon farming initiatives and ensures a supply of greener, healthier products.",
                     benefit: "High-Integrity Carbon Offtake",
                     icon: <Coins className="w-8 h-8" />
                   }
                ].map((stake, i) => (
                 <div key={i} className="space-y-8 group">
                    <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-green-500 group-hover:text-black transition-all">
                       {stake.icon}
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-2xl font-bold italic tracking-tighter">{stake.role}</h3>
                       <p className="text-sm text-white/40 leading-relaxed font-medium">{stake.desc}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                       <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">{stake.benefit}</span>
                    </div>
                 </div>
              ))}
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-40 py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
           <div className="col-span-1 lg:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded bg-white flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-black" />
                 </div>
                 <span className="text-2xl font-black tracking-tighter uppercase">Grow Carbon</span>
              </div>
              <p className="max-w-md text-white/40 text-lg font-medium leading-relaxed">
                Planet-scale regenerative infrastructure. Turning organic liability into the foundational asset of the circular economy.
              </p>
              <div className="flex gap-6">
                 {['LinkedIn', 'X-Terminal', 'Reports', 'Status'].map(term => (
                   <a key={term} href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-green-500 transition-colors">{term}</a>
                 ))}
              </div>
           </div>

           <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Infrastructure</h4>
              <div className="flex flex-col gap-6 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">
                   <a href="#" className="hover:text-white transition-colors">Bio-Hub Deployment</a>
                   <a href="#" className="hover:text-white transition-colors">Technology Stack</a>
                   <a href="#" className="hover:text-white transition-colors">CORC Enablement</a>
                   <a href="#" className="hover:text-white transition-colors">Yield Terminal</a>
              </div>
           </div>

           <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Company</h4>
              <div className="flex flex-col gap-6 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">
                 <a href="#" className="hover:text-white transition-colors">Mission Protocol</a>
                 <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
                 <a href="#" className="hover:text-white transition-colors">Compliance</a>
                 <a href="#" className="hover:text-white transition-colors">Privacy</a>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
             <span className="text-[9px] font-bold text-white/10 uppercase tracking-[0.4em]">© 2024 GROW CARBON / THE REGENERATIVE INFRASTRUCTURE FOR PLANETARY REGENERATION</span>
           <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[9px] font-bold text-green-500/40 uppercase tracking-[0.4em]">All Systems Nominal</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
