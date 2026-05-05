import './globals.css';

export const metadata = {
  title: 'Royal Track Building & Contracting L.L.C',
  description: 'Premium construction services in Dubai, UAE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
