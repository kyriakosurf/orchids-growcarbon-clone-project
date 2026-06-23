"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-[#060604] text-white font-mono relative">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-20 bg-[#060604]/90 backdrop-blur-sm border-b border-[#d4a017]/20">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-xs tracking-tight font-bold flex items-center">
            <span className="text-white">Grow</span>
            <span className="text-[#d4a017] inline-flex items-center">
              <svg viewBox="0 0 2 3"
                style={{ display: "inline-block", width: "0.58em", height: "0.7em", verticalAlign: "baseline", marginLeft: "0.08em", marginRight: 0 }}
                fill="none">
                <rect x="1" y="0" width="1" height="1" fill="currentColor" />
                <rect x="0" y="1" width="1" height="1" fill="currentColor" />
                <rect x="1" y="2" width="1" height="1" fill="currentColor" />
              </svg>arbon
            </span>
          </Link>
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-[#d4a017] transition-colors"
          >
            ← Back
          </Link>
        </div>
      </nav>

      {/* Reading progress indicator */}
      <div className="h-[1px] bg-[#d4a017]/20 w-full">
        <div className="h-full bg-[#d4a017] w-0 transition-all duration-200" id="progress-bar" />
      </div>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Meta */}
        <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium mb-12">
          Grow Carbon · June 2025
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          We are not waiting<br />
          <span className="text-[#d4a017]">for the future.</span><br />
          We are growing it.
        </h1>

        {/* Body */}
        <div className="space-y-8 text-sm md:text-base leading-[1.9] text-white/70">

          {/* Section: We Are Not Waiting */}
          <div>
            <h2 className="text-white font-medium text-xs uppercase tracking-[0.1em] mb-6">
              We Are Not Waiting
            </h2>
            <div className="space-y-5">
              <p>
                Every year, the world buries hundreds of millions of tonnes of food. It rots in
                landfills, releasing methane — a greenhouse gas dozens of times more potent than
                CO₂ — into an atmosphere already straining under the weight of our choices.
              </p>
              <p>
                At the same time, the soil that feeds us is dying. Modern agriculture and a
                changing climate are turning living farmland into dust. Desertification spreads.
                The food value chain grows more fragile with every season. And a rising population
                is left to ask a question no civilisation should have to ask: will there be enough?
              </p>
              <p>
                The system we depend on runs on chemical inputs that barely hold the line. They
                prop up supply while quietly degrading the very foundations of life — soil, water,
                air — and the health of the people they are meant to feed. We are borrowing against
                the future to pay for the present, and the debt is coming due.
              </p>
              <p>
                The frameworks meant to fix this have existed for years. Regulations. Compliance
                mandates. Carbon markets. Financial incentives. They are complex, fragmented, and
                well-intentioned — and they have not delivered the results so many expected. The gap
                between policy and reality remains wide enough to swallow whole ecosystems.
              </p>
              <p className="text-white/50 italic">
                So we made a decision.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#d4a017]/40 my-12" />

          {/* Section: We Have to Ask the Hard Questions */}
          <div>
            <h2 className="text-white font-medium text-sm uppercase tracking-[0.1em] mb-6">
              We Have to Ask the Hard Questions
            </h2>
            <div className="space-y-5">
              <p>
                We believe it is time to start asking, intensely and without flinching: How do we
                imagine our future? What world are we leaving for the generations who come after us?
                Who do we want to be — as humans, as a society, as the crew of the fragile spaceship
                that Earth will be just a few years from now?
              </p>
              <p>
                These are not abstract questions. The answers are written, every day, in the choices
                we make about waste and soil, about what we extract and what we return. We choose to
                answer them with action.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#d4a017]/40 my-12" />

          {/* Section: A New Kind of Infrastructure */}
          <div>
            <h2 className="text-white font-medium text-sm uppercase tracking-[0.1em] mb-6">
              A New Kind of Infrastructure
            </h2>
            <div className="space-y-5">
              <p className="text-white/50 italic">
                We stopped waiting — for regulators to align, for institutions to mobilise, for
                businesses to discover the will. We decided to act.
              </p>
              <p className="text-white font-medium text-base">
                Grow Carbon exists to close the loop.
              </p>
              <p>
                We are building a network of distributed industrial infrastructure — BioHubs — that
                transforms organic waste into certified, life-giving inputs for the soil. This is
                re-industrialisation reimagined: not centralised, extractive, and remote, but local,
                regenerative, and accountable. Industry placed back in the service of the future of
                humanity — rooted in local communities, creating value where that value lives, for the
                benefit of the ecosystem that sustains us all.
              </p>
              <p>
                We take what the system discards and return it to the earth as fertility, carbon, and
                resilience. We are the single accountable layer — physical and digital — that connects
                the waste producer, the facility, the farmer, and the land into one traceable,
                value-creating whole.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#d4a017]/40 my-12" />

          {/* Section: The Value Was Always There */}
          <div>
            <h2 className="text-white font-medium text-sm uppercase tracking-[0.1em] mb-6">
              The Value Was Always There
            </h2>
            <div className="space-y-5">
              <p>
                The frameworks already point the way. The EU Soil Monitoring and Resilience Directive
                recognises healthy soil as the foundation it has always been. The Fertilising Products
                Regulation (EU) 2019/1009 opens the door to certified, circular soil inputs. Carbon
                farming under the CRCF rewards those who put carbon back in the ground. The
                Biodiversity Strategy, nature-based solutions, the rise of environmental assets,
                voluntary emissions reductions, and CSRD-driven corporate accountability — all of it
                describes a world that wants to exist.
              </p>
              <p>
                But description is not delivery. The value these frameworks imagine has remained
                trapped inside a fragmented system that no single actor was positioned to unlock.
              </p>
              <p className="text-lg text-white font-medium">
                We unlock it.
              </p>
              <p>
                We create the future by surfacing the value our societies had hidden from themselves
                — turning a cost into a resource, a liability into a harvest, a broken chain into a
                closed loop. We leverage the technological advances that already exist. And where the
                tools are missing, we build them.
              </p>
              <p className="text-white/50 italic">
                That is the idea. That is the work.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-[#d4a017]/40 my-12" />

          {/* Closing */}
          <div className="pt-4">
            <p className="text-xl md:text-2xl text-white font-bold tracking-tight leading-snug">
              We are not waiting for the future.<br />
              <span className="text-[#d4a017]">We are growing it.</span>
            </p>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-8 border-t border-[#d4a017]/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#d4a017] hover:text-white transition-colors"
          >
            ← Back to main page
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#d4a017]/10">
          <div className="space-y-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium">
              Mitropoleos 51, 54623 Thessaloniki, Greece
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium">
              A <a href="https://mellonlabs.eu" target="_blank" rel="noopener noreferrer" className="text-[#d4a017] hover:text-white transition-colors">Mellon Labs</a> company
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium pt-2">
              © 2025 Grow Carbon Infrastructure Group
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}