"use client";

import React from "react";
import Link from "next/link";

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-[#060604] text-white font-mono">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-20 bg-[#060604]/90 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link href="/" className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium border-b border-transparent hover:border-[#d4a017] transition-all duration-200 hover:text-white">
            Grow Carbon
          </Link>
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.15em] text-[#d4a017] hover:text-white transition-colors"
          >
            Back to main
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Title — single massive line */}
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-16 md:mb-24">
          We are not waiting<br />
          for the future.<br />
          <span className="text-[#d4a017]">We are growing it.</span>
        </h1>

        {/* Body */}
        <div className="space-y-12 text-base md:text-lg leading-[1.8] text-white/70">

          {/* Section: We Are Not Waiting */}
          <div>
            <div className="space-y-6">
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
              <p className="text-white/40 italic">
                So we made a decision.
              </p>
            </div>
          </div>

          {/* Section: We Have to Ask the Hard Questions */}
          <div>
            <h2 className="text-[#d4a017] font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-8">
              We Have to Ask the Hard Questions
            </h2>
            <div className="space-y-6">
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

          {/* Section: A New Kind of Infrastructure */}
          <div>
            <h2 className="text-[#d4a017] font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-8">
              A New Kind of Infrastructure
            </h2>
            <div className="space-y-6">
              <p className="text-white/40 italic">
                We stopped waiting — for regulators to align, for institutions to mobilise, for
                businesses to discover the will. We decided to act.
              </p>
              <p className="text-white font-medium">
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

          {/* Section: The Value Was Always There */}
          <div>
            <h2 className="text-[#d4a017] font-medium text-xs md:text-sm uppercase tracking-[0.2em] mb-8">
              The Value Was Always There
            </h2>
            <div className="space-y-6">
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
              <p className="text-white/40 italic">
                That is the idea. That is the work.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-24 pt-8 border-t border-[#d4a017]/20">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.15em] text-[#d4a017] hover:text-white transition-colors"
          >
            ← Back to main page
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#d4a017]/10">
          <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium">
            Mitropoleos 51, 54623 Thessaloniki, Greece
          </div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium mt-2">
            A <a href="https://mellonlabs.eu" target="_blank" rel="noopener noreferrer" className="text-[#d4a017] hover:text-white transition-colors">Mellon Labs</a> company
          </div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium mt-2">
            © 2025 Grow Carbon Infrastructure Group
          </div>
        </div>
      </main>
    </div>
  );
}