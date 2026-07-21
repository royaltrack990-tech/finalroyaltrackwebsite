export const metadata = {
  title: "Turnkey Solutions Dubai | #1 Turnkey Construction & Fit-Out Company UAE - Royal Track",
  description: "Premium turnkey construction Dubai by Royal Track. Complete design-to-handover solutions for interior fit-out, exterior renovation, pool construction, landscaping, MEP, and project management across Dubai and UAE. Free consultation. Call +971 4 393 4374.",
  keywords: "turnkey solutions Dubai, turnkey construction Dubai, turnkey contractor Dubai, turnkey fit-out Dubai, design and build Dubai, turnkey project Dubai, turnkey villa Dubai, turnkey renovation Dubai, construction company Dubai, fit-out company Dubai, project management Dubai, MEP contractor Dubai, turnkey handover Dubai, complete construction Dubai, Royal Track turnkey",
  openGraph: {
    title: "Turnkey Solutions Dubai | Royal Track - Complete Design-to-Handover",
    description: "One contract. One team. Complete construction by Royal Track Dubai.",
    url: "https://royaltrack.ae/turnkey-solutions",
    siteName: "Royal Track Building & Contracting LLC",
    locale: "en_AE",
    type: "website",
  },
  alternates: { canonical: "https://royaltrack.ae/turnkey-solutions" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function TurnkeyLayout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Turnkey Construction",
    provider: {
      "@type": "LocalBusiness",
      name: "Royal Track Building & Contracting LLC",
      telephone: "+97143934374",
      email: "Info@royaltrack.ae",
      address: {
        "@type": "PostalAddress",
        streetAddress: "21st Century Building, Office 303",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      url: "https://royaltrack.ae",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "Country", name: "UAE" },
    ],
    name: "Turnkey Solutions Dubai",
    url: "https://royaltrack.ae/turnkey-solutions",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://royaltrack.ae" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://royaltrack.ae/services" },
      { "@type": "ListItem", position: 3, name: "Turnkey Solutions Dubai", item: "https://royaltrack.ae/turnkey-solutions" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is turnkey construction in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turnkey construction in Dubai means a single contractor handles everything from design, permits, construction, fit-out, MEP, finishing, and handover. Royal Track delivers complete turnkey solutions with one contract, one team, and one point of accountability.",
        },
      },
      {
        "@type": "Question",
        name: "How much do turnkey solutions cost in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turnkey costs depend on scope: villa turnkey renovation AED 200,000-1,500,000, apartment turnkey AED 80,000-400,000, commercial turnkey AED 300,000-2,000,000+. Royal Track provides free transparent quotations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a turnkey project take in Dubai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apartment 6-10 weeks, villa interior 8-14 weeks, complete villa with pool and landscape 16-24 weeks, commercial 10-20 weeks.",
        },
      },
      {
        "@type": "Question",
        name: "Does Royal Track handle permits for turnkey projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Royal Track handles all permits, NOCs, and regulatory approvals for turnkey projects including Dubai Municipality, DEWA, community management, and civil defense.",
        },
      },
      {
        "@type": "Question",
        name: "What does Royal Track turnkey include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Design and 3D visualization, permits, demolition, civil works, MEP, interior fit-out, exterior renovation, pool construction, landscaping, furniture procurement, and final handover with warranty.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
