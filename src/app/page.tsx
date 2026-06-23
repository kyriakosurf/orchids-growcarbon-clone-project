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
  const [chunks, setChunks] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    const result: string[] = [];
    for (let i = 0; i < 180; i++) {
      const words: string[] = [];
      for (let j = 0; j < 20; j++) {
        words.push(TEXTURE_WORDS[Math.floor(Math.random() * TEXTURE_WORDS.length)]);
      }
      result.push(words.join(" "));
    }
    setChunks(result);
  }, []);
  if (!chunks) return null;
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex flex-wrap gap-x-4 gap-y-0 py-4 px-4 opacity-[0.07]"
        style={{ transform: "rotate(-3deg) scale(1.2)" }}>
        {chunks.map((chunk, i) => (
          <span key={i} className="text-[7px] leading-[1.4] text-white font-medium whitespace-nowrap">
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
            Grow<span className="text-[#d4a017]"><svg viewBox="0 0 2 3"
              style={{ display: "inline-block", width: "0.58em", height: "0.7em", verticalAlign: "baseline", marginLeft: "0.12em", marginRight: 0 }}
              fill="none"><rect x="1" y="0" width="1" height="1" fill="currentColor" /><rect x="0" y="1" width="1" height="1" fill="currentColor" /><rect x="1" y="2" width="1" height="1" fill="currentColor" /></svg>arbon</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white font-medium mt-3">
            Regenerative Industrial Infrastructure
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
        <section className="space-y-6 text-sm md:text-base leading-[1.8] text-white/70">
          <p>
            We are developing <span className="text-white font-medium">BioHubs</span> — a network of <span className="text-white font-medium">regenerative industrial
            infrastructure</span> built across Greece. Each BioHub is a fully integrated
            facility: collecting organic waste, processing it into <span className="text-white font-medium">CE-certified
            compost</span>, and closing the loop by returning nutrients and carbon back
            to agricultural soil.
          </p>

          <p>
            For organic waste producers in hospitality, retail and food — we
            offer <span className="text-white font-medium">verified organic waste management</span> under the strictest
            traceability technology available. Treatment protocols designed for
            the <span className="text-white font-medium">lowest carbon footprint</span>, with full chain-of-custody documentation
            from collection point to final compost application.
          </p>

          <p>
            End-to-end traceability from <span className="text-white font-medium">waste production</span> to <span className="text-white font-medium">compost application</span>.
            Every tonne we process is tracked, verified, and reported — giving
            our clients the verified data they need for <span className="text-white font-medium">CSRD</span> and <span className="text-white font-medium">ESRS E3 and E5</span>
            compliance, <span className="text-white font-medium">Life Cycle Assessments</span>, and <span className="text-white font-medium">Environmental Product
            Declarations</span>. The full emissions picture, from source to soil.
          </p>

          <p>
            We are enablers of <span className="text-white font-medium">CO₂ reduction</span> and <span className="text-white font-medium">carbon neutrality</span> across the
            agriculture, hospitality, retail and food sectors. The carbon credits
            generated through compost application accrue to the <span className="text-white font-medium">farmer</span>. We assist
            our partners in navigating the complex obligations of <span className="text-white font-medium">CRCF Regulation
            (EU) 2024/3012</span> and international verified carbon standards — from
            <span className="text-white font-medium">MRV</span> methodology to credit issuance and retirement.
          </p>

          <p>
            Our position is built on the regulatory architecture of <span className="text-white font-medium">CSRD, CRCF,
            EU FPR CE marking</span>, and the <span className="text-white font-medium">EU Soil Monitoring Directive</span> — compliance
            frameworks that our partners cannot navigate alone. Grow Carbon is
            the single accountable <span className="text-white font-medium">physical and digital infrastructure layer</span>
            underneath it all.
          </p>
        </section>

        {/* Footer */}
        <div className="w-full h-[0.5px] bg-[#d4a017]/30 mt-20 mb-8" />
        <div className="space-y-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium">
            Mitropoleos 51, 54623 Thessaloniki, Greece
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 font-medium">
            A <a href="https://mellonlabs.eu" target="_blank" rel="noopener noreferrer" className="text-[#d4a017] hover:text-white transition-colors">Mellon Labs</a> company
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/20 text-center font-medium pt-2">
            © 2025 Grow Carbon Infrastructure Group
          </p>
        </div>
      </main>
    </div>
  );
}