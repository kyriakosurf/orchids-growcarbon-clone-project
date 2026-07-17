import type { Metadata } from "next";
import GrowCarbonLanding from "@/components/GrowCarbonLanding";

export const metadata: Metadata = {
  title: "Grow Carbon — Regenerative Industrial Infrastructure",
  description:
    "Grow Carbon develops BioHubs — a network of regenerative industrial infrastructure across Greece, turning organic waste into CE-certified compost with full CSRD, CRCF, and ESRS compliance.",
  openGraph: {
    title: "Grow Carbon — Regenerative Industrial Infrastructure",
    description:
      "Grow Carbon develops BioHubs — a network of regenerative industrial infrastructure across Greece, turning organic waste into CE-certified compost with full CSRD, CRCF, and ESRS compliance.",
    url: "https://growcarbon.eu",
    siteName: "Grow Carbon",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Carbon — Regenerative Industrial Infrastructure",
    description:
      "Grow Carbon develops BioHubs — a network of regenerative industrial infrastructure across Greece, turning organic waste into CE-certified compost.",
  },
  alternates: {
    canonical: "https://growcarbon.eu",
  },
};

export default function Page() {
  return <GrowCarbonLanding />;
}