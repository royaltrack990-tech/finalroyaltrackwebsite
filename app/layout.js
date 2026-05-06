import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export const metadata = {
  title: 'Royal Track Building & Contracting L.L.C',
  description: 'Premium construction and contracting services in Dubai, UAE - A proud subsidiary of Royal Tech Group',
  keywords: 'construction dubai, contracting uae, interior fit-out, pools landscaping, turnkey solutions, royal track',
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
