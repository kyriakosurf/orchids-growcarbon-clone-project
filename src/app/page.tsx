"use client";

import React, { useState } from "react";

const TEXTURE_WORDS = [
  "CSRD", "CRCF", "MRV", "biowaste", "compost", "SOC", "HoReCa", "LCA",
  "EPD", "BioHub", "circular", "regenerative", "soil", "carbon", "organic",
  "methane", "landfill", "traceability", "waste", "fermentation", "digestate",
  "pyrolysis", "biochar", "feedstock", "biomass", "nutrients", "humus",
  "biodiversity", "sequestration", "scope3", "emissions", "esg", "reporting",
  "compliance", "regulation", "framework", "taxonomy", "transition",
  "decarbonization", "verification", "audit", "certification", "purity",
  "yield", "efficiency", "conversion", "stabilization", "hygienization",
  "maturation", "screening", "blending", "application", "restoration",
  "resilience", "regeneration", "decomposition", "aerobic", "anaerobic",
  "microbial", "enzymatic", "hydrolysis", "acidogenesis", "acetogenesis",
  "methanogenesis", "composting", "vermicompost", "bokashi", "terrapreta",
  "agroecology", "permaculture", "regenerative", "conservation", "tillage",
  "covercrop", "rotation", "intercropping", "silvopasture", "agroforestry",
  "biosolids", "manure", "slurry", "effluent", "leachate", "runoff",
  "eutrophication", "deadzone", "nitrogen", "phosphorus", "potassium",
  "micronutrients", "chelates", "mycorrhizae", "rhizobacteria", "trichoderma",
  "biostimulants", "biofertilizers", "biopesticides", "biocontrol", "IPM",
  "remediation", "phytoextraction", "phytostabilization", "rhizodegradation",
  "constructedwetlands", "bufferstrips", "riparian", "watershed", "catchment",
  "aquifer", "recharge", "infiltration", "percolation", "evapotranspiration",
];

function ScrambledTexture() {
  const chunks: string[] = [];
  for (let i = 0; i < 180; i++) {
    const words: string[] = [];
    for (let j = 0; j < 20; j++) {
      words.push(TEXTURE_WORDS[Math.floor(Math.random() * TEXTURE_WORDS.length)]);
    }
    chunks.push(words.join(" "));
  }
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex flex-wrap gap-x-4 gap-y-0 py-4 px-4 opacity-[0.07]"
        style={{ transform: "rotate(-3deg) scale(1.2)" }}>
        {chunks.map((chunk, i) => (
          <span key={i} className="text-[7px] leading-[1.4] text-[#d4a017] font-medium whitespace-nowrap">
            {chunk}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

function CtaRow({
  primary,
  title,
  desc,
  href,
  children,
}: {
  primary?: boolean;
  title: string;
  desc: string;
  href?: string;
  children?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const Tag = href ? "a" : "button";
  const clickHandler = href ? {} : { onClick: () => setExpanded(!expanded) };
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...clickHandler}
      className={`block w-full text-left border border-[#d4a017]/20 px-6 py-5 transition-all duration-300 ${
        primary
          ? "bg-[#d4a017] text-black hover:bg-[#e6b422]"
          : "bg-transparent text-white/80 hover:bg-[#d4a017]/5 hover:border-[#d4a017]/40 hover:text-white"
      }`}
      style={{ borderWidth: "0.5px" }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className={`text-xs uppercase tracking-[0.15em] font-medium ${primary ? "text-black/70" : "text-[#d4a017]/70"}`}>
            {title}
          </p>
          <p className={`text-sm leading-relaxed ${primary ? "text-black/90" : "text-white/50"}`}>
            {desc}
          </p>
        </div>
        <span className={`shrink-0 text-lg transition-transform duration-300 ${primary ? "text-black" : "text-[#d4a017]/50"} ${expanded ? "rotate-180" : ""}`}>
          {primary ? "↓" : "→"}
        </span>
      </div>
      {expanded && children && (
        <div className="mt-4 pt-4 border-t border-[#d4a017]/30 text-sm text-black/70 leading-relaxed">
          {children}
        </div>
      )}
    </Tag>
  );
}

export default function GrowCarbonLanding() {
  return (
    <div className="min-h-screen bg-[#060604] text-white font-mono relative overflow-hidden">
      <ScrambledTexture />

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Grow<span className="text-[#d4a017]">Carbon</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d4a017] font-medium mt-3">
            Regenerative Industrial Infrastructure · Greece
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#d4a017]/30 mb-14" />

        {/* SECTION 1 — CTA Rows */}
        <section className="space-y-3 mb-20">
          <CtaRow
            primary
            title="For organic waste producers"
            desc="Close the loop. Verified. Low carbon footprint."
          >
            <p>
              Grow Carbon partners with hotels, municipalities, and
              agro-industrial facilities to divert organic waste from
              landfill. Our BioHubs process source-separated organics
              into certified compost and generate verified carbon
              avoidance data — auditable under CSRD and CRCF frameworks.
              Low-carbon, compliant, and traceable from bin to soil.
            </p>
            <p className="mt-3 text-black/50 text-xs uppercase tracking-[0.1em]">
              Contact us for a feedstock assessment →
            </p>
          </CtaRow>
          <CtaRow
            title="For facility partners"
            desc="Join the Propco network. Compliance relief. Shared upside."
          />
          <CtaRow
            title="Read the announcement"
            desc="What we are building and why it matters."
          />
          <CtaRow
            title="Get in touch"
            desc="hello@growcarbon.eu"
            href="mailto:hello@growcarbon.eu"
          />
        </section>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#d4a017]/30 mb-14" />

        {/* SECTION 2 — Editorial Body */}
        <section className="space-y-6 text-sm md:text-base leading-relaxed text-white/70">
          <p>
            Grow Carbon is architecting a decentralized network of BioHubs
            across the Mediterranean basin. Each hub functions as a local
            organic resource processing node, converting biological waste
            streams — from municipal organics, agro-industrial residues,
            and HoReCa value-chain byproducts — into stabilized compost
            assets and verifiable carbon instruments. The model is
            asset-light, compliance-forward, and designed for territorial
            scalability.
          </p>

          <p>
            Every BioHub is equipped with a proprietary digital
            traceability layer that captures and transmits feedstock
            provenance, transformation parameters, output composition,
            and end-use verification. This layer generates auditable
            data packages aligned with the CSRD, ESRS E2 and E4
            disclosure requirements, enabling full Life Cycle Assessment
            (LCA) and Environmental Product Declaration (EPD) readiness
            for offtakers and corporate partners. For the first time,
            Scope 3 emissions from organic waste can be measured,
            reported, and verified at the source.
          </p>

          <p>
            Beyond compliance, BioHubs generate verified carbon removal
            and emission avoidance data under the EU Carbon Removal
            Certification Framework (CRCF). These carbon credits accrue
            directly to the farmers and land managers who apply the
            stabilized compost to degraded agricultural soils. The
            outcome is a measurable increase in Soil Organic Carbon
            (SOC), improved water retention, reduced synthetic fertilizer
            dependency, and a documented pathway toward regenerative
            certification.
          </p>

          <p>
            The broader regulatory environment supports this transition.
            The CSRD obligates 50,000+ companies in the EU to report on
            environmental impacts, creating a compliance-driven demand
            for verifiable waste diversion and carbon sequestration data.
            The CRCF establishes a Union-wide certification framework for
            carbon removals, while the EU Fertilising Products Regulation
            (FPR) enables CE-marked organic fertilizers and soil improvers
            to access the Single Market. The EU Soil Monitoring Directive
            will further require member states to track and report soil
            health indicators, making BioHub-supplied compost a measurable
            contributor to national restoration targets. Articles 6.2 and
            6.4 of the Paris Agreement provide the international
            architecture for trading these verified mitigation outcomes.
          </p>

          <p>
            Grow Carbon is not building a waste company. We are building
            a regenerative infrastructure layer — a network of physical
            and digital assets that turns a biological liability into a
            verifiable climate asset. The endpoint is a distributed,
            farmer-centric carbon economy, underwritten by soil health
            and enabled by industrial biology.
          </p>
        </section>

        {/* Footer */}
        <div className="w-full h-[0.5px] bg-[#d4a017]/30 mt-20 mb-10" />
        <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 text-center font-medium">
          © 2025 Grow Carbon Infrastructure Group
        </p>
      </main>
    </div>
  );
}