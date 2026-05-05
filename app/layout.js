import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Royal Track Building & Contracting L.L.C',
  description: 'Premium construction and contracting services in Dubai, UAE - A subsidiary of Royal Tech Group',
  keywords: 'construction, dubai, uae, building, contracting, interior fit-out, pools, landscaping, royal track',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
