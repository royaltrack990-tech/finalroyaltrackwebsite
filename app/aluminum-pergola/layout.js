export const metadata = {
  title: "Aluminum Work & Pergola Dubai | #1 Aluminum Contractor & Shade Structures UAE - Royal Track",
  description: "Premium aluminum work and pergola installation Dubai by Royal Track. Aluminum doors, windows, cladding, railings, curtain walls, pergolas, shade structures, louvers, and carports across Dubai & UAE. Free consultation. Call +971 4 393 4374.",
  keywords: "aluminum work Dubai, aluminum contractor Dubai, aluminum doors Dubai, aluminum windows Dubai, aluminum cladding Dubai, aluminum railings Dubai, curtain wall Dubai, pergola Dubai, pergola installation Dubai, shade structures Dubai, aluminum pergola Dubai, bioclimatic louvers Dubai, retractable awning Dubai, shade sail Dubai, carport Dubai, outdoor shade Dubai, aluminum fabrication Dubai, aluminum company Dubai, Royal Track aluminum, pergola contractor Dubai, motorized pergola Dubai, louvered pergola Dubai",
  openGraph: {
    title: "Aluminum Work & Pergola Dubai | Royal Track",
    description: "Premium aluminum fabrication, doors, windows, curtain walls, pergolas, and shade structures in Dubai.",
    url: "https://royaltrack.ae/aluminum-pergola",
    siteName: "Royal Track Building & Contracting LLC",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://royaltrack.ae/aluminum-pergola" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function AluminumPergolaLayout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Aluminum Work & Pergola Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Royal Track Building & Contracting LLC",
      telephone: "+97143934374",
      email: "Info@royaltrack.ae",
      address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
      url: "https://royaltrack.ae",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "Country", name: "UAE" },
    ],
    name: "Aluminum Work & Pergola Dubai",
    url: "https://royaltrack.ae/aluminum-pergola",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How much does aluminum work cost in Dubai?", acceptedAnswer: { "@type": "Answer", text: "Aluminum work in Dubai varies: aluminum windows AED 300-800 per sqm, aluminum doors AED 500-1500 per unit, curtain walls AED 400-1200 per sqm, aluminum cladding AED 250-700 per sqm, aluminum railings AED 200-600 per running meter. Royal Track provides free detailed quotations." } },
      { "@type": "Question", name: "How much does a pergola cost in Dubai?", acceptedAnswer: { "@type": "Answer", text: "Pergola cost in Dubai: basic aluminum pergola AED 15,000-30,000, bioclimatic louvered pergola AED 30,000-80,000, motorized retractable pergola AED 40,000-120,000, large custom pergola AED 50,000-200,000+. Price depends on size, material, and features." } },
      { "@type": "Question", name: "What aluminum services does Royal Track offer?", acceptedAnswer: { "@type": "Answer", text: "Royal Track offers aluminum doors, windows, sliding systems, curtain walls, cladding, railings, balustrades, kitchen cabinets, bathroom partitions, shopfronts, pergolas, louvers, shade structures, carports, and custom aluminum fabrication across Dubai." } },
      { "@type": "Question", name: "Does Royal Track install motorized pergolas?", acceptedAnswer: { "@type": "Answer", text: "Yes, Royal Track installs motorized pergolas with automated louvered roofs, retractable canopies, integrated LED lighting, rain sensors, and smart home integration. Remote control and app-based operation available." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
