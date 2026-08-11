import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import pageData from '@/data/landingPageData.json';
import { LandingPageContent } from '@/types/landing';

const inter = Inter({ subsets: ['latin'] });

// Typecast to ensure absolute safety
const data = pageData as LandingPageContent;

export const metadata: Metadata = {
  title: 'Nexcent | Agency Landing Page',
  description: 'Manage your entire community in a single system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header data={data.header} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer data={data.footer} />
      </body>
    </html>
  );
}