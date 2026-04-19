import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import { siteContent } from '@/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

const { seo } = siteContent;

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | ${siteContent.contact.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL(seo.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: seo.locale,
    url: seo.url,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
