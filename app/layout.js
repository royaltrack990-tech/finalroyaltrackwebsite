import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './globals.css';

export const metadata = {
  title: 'Royal Track Building & Contracting LLC',
  description: 'Premium construction services in UAE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}