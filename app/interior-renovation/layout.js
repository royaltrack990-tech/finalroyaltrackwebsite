// SEO Metadata for Interior Renovation Dubai Page
// This file makes the page's <head> SEO-rich (title, description, canonical, OG, Twitter, schema)

export const metadata = {
  title: 'Interior Renovation Dubai | #1 Interior Design & Fit-Out Company UAE - Royal Track',
  description: 'Premium interior renovation Dubai services by Royal Track Building & Contracting LLC. Expert villa, home, apartment, kitchen, bathroom & office interior fit-out in Dubai & UAE. Free consultation, 10-year warranty. Call +971 4 393 4374.',
  keywords: 'interior renovation Dubai, interior renovation UAE, interior design Dubai, interior fit-out Dubai, villa renovation Dubai, home renovation Dubai, apartment renovation Dubai, kitchen renovation Dubai, bathroom renovation Dubai, bedroom renovation Dubai, living room renovation Dubai, office interior Dubai, commercial interior Dubai, hotel interior Dubai, luxury interior Dubai, modern interior Dubai, interior renovation company Dubai, interior contractors Dubai, interior fit-out company UAE, Royal Track interior, best interior company Dubai, top interior designer Dubai, interior renovation services UAE, interior remodeling Dubai, Dubai interior design, UAE interior fit-out, premium interior Dubai, residential interior Dubai, commercial renovation Dubai, turnkey interior Dubai',
  authors: [{ name: 'Royal Track Building & Contracting LLC' }],
  creator: 'Royal Track Building & Contracting LLC',
  publisher: 'Royal Track Building & Contracting LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Interior Renovation Dubai | #1 Interior Design & Fit-Out Company - Royal Track UAE',
    description: 'Transform your space with Royal Track\'s premium interior renovation services in Dubai. Villa, home, apartment, kitchen, bathroom & office renovation experts. 10+ years experience, 500+ projects.',
    url: 'https://royaltrack.ae/interior-renovation',
    siteName: 'Royal Track Building & Contracting LLC',
    images: [
      {
        url: 'https://royaltrack.ae/images/kitchen_gold.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Renovation Dubai - Royal Track Premium Interior Design Services',
        type: 'image/jpeg',
      },
      {
        url: 'https://royaltrack.ae/images/living_marble.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Living Room Interior Renovation Dubai - Royal Track',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Renovation Dubai | Royal Track - Premium Interior Design UAE',
    description: 'Premium interior renovation in Dubai & UAE. Villa, home, kitchen, bathroom renovation experts. Get a free quote today!',
    images: ['https://royaltrack.ae/images/kitchen_gold.jpg'],
  },
  alternates: {
    canonical: 'https://royaltrack.ae/interior-renovation',
    languages: {
      'en-AE': 'https://royaltrack.ae/interior-renovation',
      'en': 'https://royaltrack.ae/interior-renovation',
    },
  },
  category: 'Construction & Interior Design',
  // Geo tags for local SEO
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.276987;55.296249',
    'ICBM': '25.276987, 55.296249',
  },
};

export default function InteriorRenovationLayout({ children }) {
  // Structured Data (Schema.org JSON-LD) for Google to understand the page

  // 1. Service Schema - tells Google exactly what service we offer
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Interior Renovation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Royal Track Building & Contracting LLC',
      image: 'https://royaltrack.ae/images/roya_track_full_logo.png',
      telephone: '+97143934374',
      email: 'Info@royaltrack.ae',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '21st Century Building, Office 303, 13-45A Street',
        addressLocality: 'Al Muraqqabat',
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
      url: 'https://royaltrack.ae',
    },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'City', name: 'Abu Dhabi' },
      { '@type': 'City', name: 'Sharjah' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    name: 'Interior Renovation Dubai',
    description: 'Premium interior renovation, design, and fit-out services in Dubai and across the UAE. Specialized in villa, home, apartment, kitchen, bathroom, bedroom, living room, office, hotel and commercial interior renovation.',
    url: 'https://royaltrack.ae/interior-renovation',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Renovation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Interior Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Interior Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Interior Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bedroom Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living Room Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Interior Fit-Out Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel Interior Renovation Dubai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interior Renovation Dubai' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '187',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // 2. Breadcrumb Schema - helps Google show breadcrumbs in search results
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://royaltrack.ae' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://royaltrack.ae/services' },
      { '@type': 'ListItem', position: 3, name: 'Interior Renovation Dubai', item: 'https://royaltrack.ae/interior-renovation' },
    ],
  };

  // 3. FAQ Schema - allows Google to show FAQ rich results in SERP (huge SEO win)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does interior renovation cost in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interior renovation cost in Dubai depends on the property size, materials, and scope of work. A typical apartment renovation in Dubai ranges from AED 50,000 to AED 250,000, while villa interior renovation in Dubai can range from AED 200,000 to AED 1,500,000. Royal Track provides free, transparent quotations after a site visit and consultation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does interior renovation in Dubai take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Interior renovation timeline in Dubai varies by project scope. A single-room renovation typically takes 2–3 weeks, full apartment renovation 6–8 weeks, and complete villa renovation 3–6 months. Royal Track provides a detailed project timeline with every quote and adheres strictly to milestones.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need approval for interior renovation in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, structural interior renovation work in Dubai requires NOC and approval from Dubai Municipality or the relevant free zone authority. As a licensed Dubai interior renovation contractor, Royal Track handles all permits, NOCs, and approvals on your behalf to ensure full compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What interior renovation services does Royal Track offer in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Royal Track offers complete interior renovation services in Dubai including villa renovation, home renovation, apartment renovation, kitchen renovation, bathroom renovation, bedroom renovation, living room renovation, office interior fit-out, hotel renovation, and commercial interior renovation across Dubai and the UAE.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Royal Track offer warranty on interior renovation in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Royal Track offers a comprehensive warranty on all interior renovation projects in Dubai. Workmanship is warranted for up to 10 years, and material warranties follow manufacturer terms. We are a fully licensed and insured Dubai interior renovation company.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which areas in Dubai does Royal Track service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Royal Track provides interior renovation services across all Dubai areas including Downtown Dubai, Dubai Marina, Palm Jumeirah, Arabian Ranches, Emirates Hills, Jumeirah Village Circle (JVC), Dubai Hills, Business Bay, JBR, Al Barsha, Mirdif, and across the UAE including Abu Dhabi, Sharjah, Ajman and Ras Al Khaimah.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Royal Track design and renovate together (turnkey)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Royal Track is a complete turnkey interior renovation company in Dubai. We handle design, 3D visualization, material sourcing, construction, MEP works, finishing, and final handover under one roof — saving you time, money, and coordination headaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get a quote for interior renovation in Dubai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Getting a free interior renovation quote in Dubai is easy. Call Royal Track at +971 4 393 4374, WhatsApp +971 55 282 4492, or fill the inquiry form on this page. We respond within 24 hours and arrange a free site visit and consultation.',
        },
      },
    ],
  };

  return (
    <>
      {/* Inject Schema.org structured data for SEO */}
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
