import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Royal Track | Construction & Contracting Dubai',
  description: 'Premium construction and contracting services in Dubai and UAE. Interior fit-out, pools, landscaping, and turnkey solutions.',
  keywords: 'construction dubai, contracting uae, interior fit-out, pools landscaping, turnkey solutions',
  metadataBase: new URL('https://royaltrack.ae'),
  alternates: {
    canonical: 'https://royaltrack.ae',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       

        {/* Google Analytics 4 */}
       <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GFR789KQBP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GFR789KQBP');
</script>
        {/* End Google Analytics 4 */}

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
