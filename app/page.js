import HomeClient from './HomeClient';

export const metadata = {
  title: 'Royal Track | Construction & Contracting Dubai',
  description: 'Premium construction and contracting services in Dubai and UAE. Interior fit-out, pools, landscaping, and turnkey solutions.',
  alternates: {
    canonical: 'https://royaltrack.ae',
  },
};

export default function Home() {
  return <HomeClient />;
}
