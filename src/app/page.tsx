"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  TreePine, 
  BarChart3, 
  Globe2, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  LineChart, 
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggeredContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F5] font-plus-jakarta text-[#1A2F23] selection:bg-[#B4E391] selection:text-[#1A2F23]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#1A2F23]/10 bg-[#F5F7F5]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D5A27]">
              <TreePine className="h-6 w-6 text-[#B4E391]" />
            </div>
            <span className="font-syne text-2xl font-bold tracking-tight text-[#1A2F23]">
              GrowCarbon
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#" className="transition-colors hover:text-[#2D5A27]">Platform</a>
            <a href="#" className="transition-colors hover:text-[#2D5A27]">Solutions</a>
            <a href="#" className="transition-colors hover:text-[#2D5A27]">Resources</a>
            <a href="#" className="transition-colors hover:text-[#2D5A27]">Company</a>
            <Button variant="ghost" className="text-[#1A2F23] hover:bg-[#2D5A27]/5">Sign In</Button>
            <Button className="rounded-full bg-[#1A2F23] px-6 text-[#F5F7F5] hover:bg-[#2D5A27]">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 pb-32 md:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#B4E391_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#E2F0D9_0%,_transparent_40%)] opacity-40" />
          
          <div className="mx-auto max-w-7xl text-center">
            <motion.div
              {...fadeIn}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2D5A27]/20 bg-white/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#2D5A27]" />
              New feature: Real-time supply chain emission tracking
              <ArrowRight className="h-4 w-4" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-8 max-w-4xl font-syne text-5xl font-extrabold leading-[1.1] tracking-tight text-[#1A2F23] md:text-7xl lg:text-8xl"
            >
              The climate data <span className="text-[#2D5A27]">engine</span> for high-growth enterprises.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-[#1A2F23]/70 md:text-xl md:leading-relaxed"
            >
              Transform your sustainability goals into measurable impact. GrowCarbon provides the precision analytics needed to track, reduce, and report your carbon footprint.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" className="h-14 rounded-full bg-[#1A2F23] px-10 text-lg font-bold text-[#F5F7F5] hover:bg-[#2D5A27]">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full border-2 border-[#1A2F23]/10 px-10 text-lg font-bold hover:bg-[#1A2F23]/5">
                Watch Demo
              </Button>
            </motion.div>

            {/* Floating Cards Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative mt-20"
            >
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-4 shadow-2xl backdrop-blur-xl">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[#1A2F23]">
                   <div className="flex h-full w-full flex-col p-8">
                      <div className="flex items-center justify-between border-b border-white/10 pb-6">
                        <div className="space-y-1">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Global Overview</p>
                          <h3 className="font-syne text-2xl font-bold text-white">Carbon Intensity Dashboard</h3>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-8 w-24 rounded-lg bg-white/10" />
                          <div className="h-8 w-8 rounded-lg bg-white/10" />
                        </div>
                      </div>
                      
                      <div className="grid h-full grid-cols-3 gap-8 pt-8">
                        <div className="col-span-2 space-y-6">
                           <div className="relative h-48 w-full">
                              {/* Simple CSS simulated area chart */}
                              <div className="absolute inset-0 flex items-end gap-1 overflow-hidden">
                                {[40, 60, 45, 80, 55, 90, 70, 100, 85, 110].map((h, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 bg-gradient-to-t from-[#B4E391]/20 to-[#B4E391]" 
                                    style={{ height: `${h}%` }}
                                  />
                                ))}
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <Card className="border-white/5 bg-white/5 p-4 text-white">
                                <p className="text-sm opacity-50">Scope 1 & 2</p>
                                <p className="text-2xl font-bold">-12.4%</p>
                              </Card>
                              <Card className="border-white/5 bg-white/5 p-4 text-white">
                                <p className="text-sm opacity-50">Supply Chain</p>
                                <p className="text-2xl font-bold">+2.1%</p>
                              </Card>
                           </div>
                        </div>
                        <div className="space-y-4">
                           <div className="rounded-xl bg-white/5 p-4">
                              <div className="mb-4 flex items-center gap-2">
                                <Globe2 className="h-4 w-4 text-[#B4E391]" />
                                <span className="text-xs font-semibold text-white">Active Projects</span>
                              </div>
                              <div className="space-y-3">
                                {[1, 2, 3].map((_, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-[#B4E391]/20" />
                                    <div className="h-2 flex-1 rounded-full bg-white/10" />
                                  </div>
                                ))}
                              </div>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1A2F23] py-24 px-6 text-[#F5F7F5] md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-4 md:gap-8">
               <div className="space-y-2">
                  <h4 className="font-syne text-5xl font-bold">500+</h4>
                  <p className="text-[#F5F7F5]/60">Enterprise Partners</p>
               </div>
               <div className="space-y-2">
                  <h4 className="font-syne text-5xl font-bold">2.4M</h4>
                  <p className="text-[#F5F7F5]/60">Metric Tons Monitored</p>
               </div>
               <div className="space-y-2">
                  <h4 className="font-syne text-5xl font-bold">99.9%</h4>
                  <p className="text-[#F5F7F5]/60">Audit Accuracy</p>
               </div>
               <div className="space-y-2">
                  <h4 className="font-syne text-5xl font-bold">140+</h4>
                  <p className="text-[#F5F7F5]/60">Countries Covered</p>
               </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-32 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 font-syne text-4xl font-bold text-[#1A2F23] md:text-5xl">Built for tomorrow's benchmarks.</h2>
              <p className="mx-auto max-w-2xl text-[#1A2F23]/60">We provide the infrastructure for corporate sustainability data that actually stands up to scrutiny.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-[#2D5A27]" />,
                  title: "Instant Integration",
                  description: "Connect your existing ERP and utility data in minutes with our native API connectors."
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-[#2D5A27]" />,
                  title: "Audit-Ready Quality",
                  description: "Every data point is tracked and verifiable, designed to meet SEC and CSRD reporting standards."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-[#2D5A27]" />,
                  title: "Predictive Analytics",
                  description: "AI-driven insights help you simulate reduction paths and hit your Net-Zero targets faster."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-3xl border border-[#1A2F23]/5 bg-[#F5F7F5] p-10 transition-all hover:bg-[#E2F0D9]/50 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 font-syne text-2xl font-bold text-[#1A2F23]">{feature.title}</h3>
                  <p className="text-[#1A2F23]/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 md:px-12">
           <div className="mx-auto max-w-7xl">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2D5A27] px-8 py-20 text-center md:px-20">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_1%)] bg-[length:32px_32px] opacity-10" />
                
                <Leaf className="mx-auto mb-8 h-16 w-16 text-[#B4E391]" />
                <h2 className="mb-8 font-syne text-4xl font-bold text-white md:text-6xl">Ready to grow sustainably?</h2>
                <p className="mx-auto mb-10 max-w-2xl text-[#F5F7F5]/80 text-lg">Join the hundreds of organizations worldwide using GrowCarbon to accelerate their transition to Net Zero.</p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="h-16 rounded-full bg-white px-12 text-xl font-bold text-[#2D5A27] hover:bg-[#B4E391]">
                    Book a Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 rounded-full border-2 border-white/20 px-12 text-xl font-bold text-white hover:bg-white/10">
                    See the Pricing
                  </Button>
                </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1A2F23]/10 bg-white py-20 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2D5A27]">
                  <TreePine className="h-5 w-5 text-[#B4E391]" />
                </div>
                <span className="font-syne text-xl font-bold tracking-tight text-[#1A2F23]">GrowCarbon</span>
              </div>
              <p className="max-w-xs text-sm text-[#1A2F23]/60 leading-relaxed">
                The world's most trusted climate analytics platform. Helping companies measure, reduce, and report their carbon footprint with unmatched precision.
              </p>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-[#1A2F23]">Platform</h4>
              <ul className="space-y-4 text-sm text-[#1A2F23]/60">
                <li><a href="#" className="hover:text-[#2D5A27]">Dashboard</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Integrations</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Carbon Credits</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-xs text-[#1A2F23]">Company</h4>
              <ul className="space-y-4 text-sm text-[#1A2F23]/60">
                <li><a href="#" className="hover:text-[#2D5A27]">About Us</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Contact</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#1A2F23]/10 pt-8 md:flex-row">
            <p className="text-sm text-[#1A2F23]/40">© 2024 GrowCarbon Inc. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-[#1A2F23]/40">
              <a href="#" className="hover:text-[#2D5A27]">Twitter</a>
              <a href="#" className="hover:text-[#2D5A27]">LinkedIn</a>
              <a href="#" className="hover:text-[#2D5A27]">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
