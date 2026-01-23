"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe2, 
  Activity,
  ArrowRight,
  Box,
  Sprout,
  ShieldCheck,
  Factory,
  TrendingUp,
  HardDrive,
  MapPin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    title: "Biological Engineering",
    category: "Infrastructure",
    desc: "Leveraging state-of-the-art cleantech from Compost Systems GmbH to transform organic liabilities into hyper-stabilized compost assets.",
    icon: <Factory className="w-5 h-5" />,
    bg: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Digital Intelligence",
    category: "Wastecloud™ Platform",
    desc: "Our proprietary Wastecloud™ traceability layer generates verifiable carbon assets and closes the ESG reporting gap with immutable data.",
    icon: <HardDrive className="w-5 h-5" />,
    bg: "from-blue-500/10 to-green-500/10"
  },
  {
    title: "Market Enablement",
    category: "Catalytic Partnerships",
    desc: "Big organic waste producers, multinational food companies and agri sector chemical companies support the Bio-HUB network to transition to regenerative food production.",
    icon: <Globe2 className="w-5 h-5" />,
    bg: "from-yellow-500/10 to-green-500/10"
  }
];

export default function Home() {
  useEffect(() => {
    console.log("Grow Carbon App Mounted");
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-green-500/30 font-sans selection:text-green-400">
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
            {['Bio Hub Network', 'Technology', 'Initiatives'].map((item) => (
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
          <Link href="/">
            <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 px-4 h-10">
              System Exit
            </Button>
          </Link>
          <Button className="h-10 rounded bg-white text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 text-black px-8 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Partner With Us
          </Button>
        </div>
      </nav>

      <main className="pt-40 max-w-7xl mx-auto space-y-40 px-6 pb-40">
        {/* HERO SECTION */}
        <section className="relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded bg-green-500/5 border border-green-500/20">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-green-500">Status: Infrastructure Layer Active</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.85]">
                  Architecting <br />
                  Global <br />
                  <span className="text-white/40 italic">Regenerative</span> <br />
                  Infrastructure.
                </h1>

                <p className="max-w-2xl text-xl text-white/50 leading-relaxed font-medium">
                  Grow Carbon is a global provider of regenerative infrastructure solutions, connecting the world’s organic resource cycles through its integrated environmental, biological, and digital technologies. We are building a distributed network of organic resource management hubs designed to solve the twin crises of landfill saturation and soil degradation.
                  <br /><br />
                  By leveraging state-of-the-art cleantech (Compost Systems GmbH) and a proprietary digital traceability layer (Wastecloud™), Grow Carbon transforms organic liabilities into hyper-stabilized compost and verifiable carbon assets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" className="h-16 rounded bg-green-600 text-white hover:bg-green-500 transition-all font-bold px-10 group text-[11px] uppercase tracking-widest">
                  Join The Network
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5">
                {[
                  { value: '142', label: 'Hubs Deployed' },
                  { value: '8.4M', label: 'Tons Diverted' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="py-20 border-y border-white/5">
           <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">The Opportunity</span>
                 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">The Circularity Gap</h2>
                 <p className="text-white/40 text-xl leading-relaxed max-w-xl">
                   Global supply chains are currently disrupted by linear waste models and chemical fertilizer dependency. In the Mediterranean alone, hotel and agricultural sectors face rising landfill taxes and declining soil productivity.
                 </p>
                 <div className="grid grid-cols-3 gap-6 pt-8">
                    <div className="space-y-4">
                       <div className="h-12 w-12 rounded bg-red-500/10 flex items-center justify-center text-red-500">
                          <Activity className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-sm uppercase tracking-wider">Landfill Saturation</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Billions of tons of organic matter buried annually, emitting methane and draining municipal budgets.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="h-12 w-12 rounded bg-red-500/10 flex items-center justify-center text-red-500">
                          <Sprout className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-sm uppercase tracking-wider">Chemical Dependency</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Industrial farming relies on synthetic fertilizers that degrade soil health and pollute waterways.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="h-12 w-12 rounded bg-red-500/10 flex items-center justify-center text-red-500">
                          <ShieldCheck className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-sm uppercase tracking-wider">Traceability Gap</h4>
                       <p className="text-xs text-white/40 leading-relaxed">Corporates lack verifiable data for Scope 3 emissions, undermining ESG commitments and investor trust.</p>
                    </div>
                 </div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col p-12 justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="space-y-8 relative z-10">
                    <div className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500">• The Solution</span>
                       <h3 className="text-3xl font-bold italic tracking-tighter">A decentralized network of "Micro-Hubs" that process organic waste at the source.</h3>
                    </div>
                    <div className="h-px w-20 bg-green-500" />
                    <div className="space-y-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">• The Result</span>
                       <p className="text-sm text-white/60 font-medium">We provide waste producers with a low-carbon disposal alternative and food producers with the biological inputs required for regenerative agriculture.</p>
                    </div>
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
              Operating at the intersection of biology, software, and industrial engineering to deploy essential regenerative infrastructure.
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

        {/* STAKEHOLDERS SECTION */}
        <section className="bg-white/[0.02] border border-white/5 rounded-[50px] p-12 lg:p-24 space-y-20">
           <div className="max-w-3xl space-y-6">
             <h2 className="text-4xl lg:text-5xl font-bold tracking-tight italic uppercase">The Ecosystem.</h2>
             <p className="text-white/40 text-xl font-medium">A multi-stakeholder model optimized for planetary health and resource resilience.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-10">
            {[
               { 
                 role: "Hotels & Hospitality", 
                 desc: "Seamless, compliant waste diversion. Transform kitchen and organic waste into a verified sustainability asset.",
                 benefit: "Compliant Waste Diversion",
                 icon: <Box className="w-8 h-8" />
               },
               { 
                 role: "Farmers & Growers", 
                 desc: "Access highly stabilized compost for soil resilience. Reduce chemical dependency while improving yields and water retention.",
                 benefit: "Soil Resilience & Yield",
                 icon: <Sprout className="w-8 h-8" />
               },
               { 
                 role: "Corporates & ESG", 
                 desc: "Verifiable Scope 3 emissions reduction data. Close the traceability gap with immutable, auditable impact metrics.",
                 benefit: "Verified Scope 3 Data",
                 icon: <ShieldCheck className="w-8 h-8" />
               },
               { 
                 role: "Food & Agri-Chem Giants", 
                 desc: "Support the transition to climate resilient, regenerative food production by backing our Bio-HUB network development.",
                 benefit: "Regenerative Transition",
                 icon: <Globe2 className="w-8 h-8" />
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20">
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
                   <a href="#" className="hover:text-white transition-colors">Compliance</a>
                   <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>
           </div>

           <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Headquarters</h4>
              <div className="flex flex-col gap-8 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">
                   <div className="flex gap-4">
                      <MapPin className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="leading-relaxed">Mitropoleos 51<br />546 23 Thessaloniki<br />Greece</span>
                   </div>
                   <div className="flex gap-4">
                      <Phone className="w-4 h-4 text-green-500 shrink-0" />
                      <span>+30 2310 254520</span>
                   </div>
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
