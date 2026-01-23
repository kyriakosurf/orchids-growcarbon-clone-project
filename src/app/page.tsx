"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sprout, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Lock,
  Mail,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");

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

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        <div className="max-w-4xl w-full space-y-24">
          
          {/* Header/Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]">
               <Sprout className="w-8 h-8 text-black" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-green-500">System Gateway</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic">Grow Carbon</h1>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Project Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">The Foundation of Industrial Regeneration.</h3>
                <p className="text-white/50 leading-relaxed text-lg">
                  Grow Carbon is architecting a decentralized network of organic resource management hubs. We transform biological liabilities into stabilized assets using hyper-efficient conversion technology and immutable digital traceability.
                </p>
              </div>

              <div className="grid gap-6">
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
            </motion.div>

            {/* Login Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-10 rounded-[24px] bg-zinc-900/80 backdrop-blur-xl border border-white/10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">Access Portal</h3>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-black">GROW CARBON IS CURRENTLY AT STEALTH MODE. AUTHORISED ACCESS ONLY.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email Identifier</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        type="email" 
                        placeholder="name@organization.com"
                        className="w-full h-14 bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Secure Token</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                      <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full h-14 bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Link href="/portal">
                    <Button className="w-full h-14 bg-white text-black hover:bg-green-500 font-black uppercase tracking-[0.2em] text-[11px] transition-all rounded-xl">
                      Initialize Session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="flex justify-between px-2">
                    <button className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Request Access</button>
                    <button className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">Reset Sync</button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Footer-lite */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">Node-GCRB Status: Nominal</span>
            </div>
            <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">© 2024 GROW CARBON INFRASTRUCTURE GROUP</span>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
