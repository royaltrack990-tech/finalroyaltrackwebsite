import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Royal Track Building & Contracting LLC - Premium Construction Services Dubai, UAE',
  description: 'Royal Track offers premium construction and contracting services in Dubai & UAE. Expert interior fit-out, pool & landscaping design, and turnkey solutions for residential and commercial projects.',
  keywords: 'construction Dubai, contracting UAE, interior fit-out Dubai, pool contractor Dubai, landscaping design UAE, building contractor, renovation services, turnkey solutions',
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
    title: 'Royal Track Building & Contracting LLC - Premium Construction Services Dubai',
    description: 'Expert construction, interior fit-out, and landscaping services in Dubai and UAE. Premium quality, professional execution.',
    url: 'https://royaltrack.ae',
    siteName: 'Royal Track Building & Contracting LLC',
    images: [
      {
        url: 'https://royaltrack.ae/images/kitchen_gold.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Track Interior Fit-Out Services',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Track Building & Contracting LLC - Premium Construction Services',
    description: 'Expert construction and contracting services in Dubai & UAE',
    images: ['https://royaltrack.ae/images/kitchen_gold.jpg'],
  },
  alternates: {
    canonical: 'https://royaltrack.ae',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://royaltrack.ae',
    name: 'Royal Track Building & Contracting L.L.C',
    image: 'https://royaltrack.ae/images/royal_track_full_logo.png',
    description: 'Premium construction and contracting services in Dubai, UAE - Interior fit-out, Pools & Landscaping, Turnkey Solutions',
    url: 'https://royaltrack.ae',
    telephone: '+97143934374',
    email: 'Info@royaltrack.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21st Century Building, Office 303, 13-45A Street',
      addressLocality: 'Al Muraqqabat',
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE',
    },
    sameAs: [
      'https://www.facebook.com/royaltrackcontractingllc',
      'https://www.instagram.com/royal.track.ae',
      'https://www.linkedin.com/company/royal-track-building-contracting-llc',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Dubai',
      },
      {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
    ],
    priceRange: 'AED',
    knowsAbout: [
      'Interior Design',
      'Construction',
      'Pool Design',
      'Landscaping',
      'Turnkey Solutions',
      'Building Contracting',
      'Fit-Out Services',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Royal Tech Group',
      url: 'https://royal-techgroup.com',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    url: 'https://royaltrack.ae',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://royaltrack.ae/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Canonical Tag */}
        <link rel="canonical" href="https://royaltrack.ae" />

        {/* Viewport and Charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1f2937" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Favicon */}
        <link rel="icon" href="/app/icon.png" />

        {/* Structured Data - Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TPGT6MHG');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '922903900769966');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=922903900769966&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPGT6MHG"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
