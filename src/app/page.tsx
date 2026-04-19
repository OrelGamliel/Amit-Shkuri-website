import { siteContent } from '@/content';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const { contact, seo } = siteContent;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'עמית שקורי – שיאצו וטווינה',
  description:
    'מטפלת מוסמכת ברפואה סינית ברמת גן. שיאצו, טווינה, כוסות רוח ומוקסה לכאבי גב, כאבי צוואר, מיגרנות, מתח, חרדה ועייפות כרונית.',
  url: seo.url,
  telephone: contact.phone,
  image: `${seo.url}/images/hero.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'רמת גן',
    addressRegion: 'גוש דן',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.0853,
    longitude: 34.8243,
  },
  areaServed: ['רמת גן', 'תל אביב', 'גבעתיים', 'בני ברק', 'פתח תקווה', 'גוש דן'],
  priceRange: '₪₪',
  currenciesAccepted: 'ILS',
  paymentAccepted: 'Cash, Bank Transfer, Bit',
  inLanguage: 'he',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'טיפולי שיאצו וטווינה',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'שיאצו',
          description: 'טיפול יפני על נקודות מרידיאן לשחרור מתחים, כאבי גב, צוואר ומיגרנות',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'טווינה',
          description: 'עיסוי רפואי סיני לכאבים אורתופדיים, שרירים ומפרקים',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'כוסות רוח',
          description: 'טיפול מסורתי לשחרור חסימות, כאב ועייפות',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'מוקסה',
          description: 'חימום נקודות דיקור להגברת אנרגיה וחיזוק מערכת החיסון',
        },
      },
    ],
  },
  sameAs: [contact.instagram],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
