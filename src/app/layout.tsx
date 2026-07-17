import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grow Carbon — Regenerative Industrial Infrastructure",
  description:
    "Grow Carbon develops BioHubs — a network of regenerative industrial infrastructure across Greece, turning organic waste into CE-certified compost with full CSRD, CRCF, and ESRS compliance.",
  icons: "/favicon.svg?v=2",
  metadataBase: new URL("https://growcarbon.eu"),
  openGraph: {
    siteName: "Grow Carbon",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.className}>
      <body className="antialiased">
        <ErrorReporter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://growcarbon.eu/#organization",
                  name: "Grow Carbon",
                  url: "https://growcarbon.eu",
                  logo: "https://growcarbon.eu/favicon.svg",
                  description:
                    "Grow Carbon develops BioHubs — a network of regenerative industrial infrastructure across Greece, turning organic waste into CE-certified compost.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Mitropoleos 51",
                    addressLocality: "Thessaloniki",
                    postalCode: "54623",
                    addressCountry: "GR",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "hello@growcarbon.eu",
                    contactType: "sales",
                  },
                  parentOrganization: {
                    "@type": "Organization",
                    name: "Mellon Labs",
                    url: "https://mellonlabs.eu",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://growcarbon.eu/#website",
                  url: "https://growcarbon.eu",
                  name: "Grow Carbon",
                  description:
                    "Regenerative Industrial Infrastructure — BioHubs turning organic waste into certified compost.",
                  publisher: { "@id": "https://growcarbon.eu/#organization" },
                },
              ],
            }),
          }}
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
