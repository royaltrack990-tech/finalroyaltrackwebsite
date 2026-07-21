export const metadata = {
  title: "Construction Services Dubai | Electrical, AC, Waterproofing, Flooring, Painting, MEP - Royal Track",
  description: "Complete construction services Dubai by Royal Track — electrical works, AC & ducting, fencing & gates, waterproofing, flooring & tiling, painting & finishing, MEP works, plants supply, irrigation, outdoor lighting, and civil works. Free consultation. Call +971 4 393 4374.",
  keywords: "electrical works Dubai, AC ducting Dubai, fencing Dubai, waterproofing Dubai, flooring tiling Dubai, painting Dubai, MEP works Dubai, plants supply Dubai, irrigation Dubai, outdoor lighting Dubai, civil works Dubai, construction services Dubai, contractor Dubai, Royal Track services, HVAC Dubai, plumbing Dubai, electrical contractor Dubai, tiling contractor Dubai, painting contractor Dubai",
  openGraph: {
    title: "Construction Services Dubai | Royal Track",
    description: "Complete construction and maintenance services across Dubai and UAE.",
    url: "https://royaltrack.ae/services",
    siteName: "Royal Track",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://royaltrack.ae/services" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
