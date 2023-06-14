import './globals.css';

import { getSiteSettings } from '@/lib/sanityClient';

import RootBackground from '@/components/base/RootBackground';
import Container from '@/components/base/Container';
import Header from "@/components/composite/Header";
import Footer from "@/components/composite/Footer";

const siteSettings = await getSiteSettings();

export const metadata = {
  title: siteSettings.title,
  description: siteSettings.description,
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black dark:text-zinc-100 h-full flex flex-col">
        <RootBackground />
        <div className="h-full flex flex-col justify-between">
          <Container><Header /></Container>
          <Container>{children}</Container>
          <Container><Footer /></Container>
        </div>
      </body>
    </html>
  )
}
