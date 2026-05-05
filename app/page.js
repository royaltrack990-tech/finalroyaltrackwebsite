'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1c1917',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{
          fontSize: '60px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          ROYAL <span style={{ color: '#E8B92C' }}>TRACK</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          color: '#B8B8B8'
        }}>
          Building & Contracting L.L.C
          <br />
          Premium Construction Services in Dubai, UAE
        </p>

        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/about" style={{
            backgroundColor: '#E8B92C',
            color: '#1c1917',
            padding: '15px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            About Us
          </Link>
          
          <Link href="/services" style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            border: '2px solid white'
          }}>
            Our Services
          </Link>
          
          <Link href="/projects" style={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            border: '2px solid white'
          }}>
            Projects
          </Link>
        </div>

        <div style={{
          marginTop: '60px',
          padding: '20px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          border: '1px solid #E8B92C'
        }}>
          <p style={{ color: '#E8B92C', marginBottom: '10px', fontWeight: 'bold' }}>
            ✅ Website is LIVE!
          </p>
          <p style={{ fontSize: '14px', color: '#B8B8B8' }}>
            Contact: +971 4 393 4374 | Info@royaltrack.ae
          </p>
        </div>
      </div>
    </div>
  );
}
