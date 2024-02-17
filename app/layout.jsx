import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "../components/ToastProvider";
import { CrispProvider } from "../components/CrispProvider";
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from '../components/CookieConsent';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TRUST',
  description: 'Build trust with anyone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <ClerkProvider>
        <body className={inter.className}>
          <Head>
            <link rel="icon" href="/icon.png" sizes="any" />
          </Head>
          <Script
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
          <Script id="google-translate-init" strategy="afterInteractive">
            {`function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
  }`}
          </Script>

          <ToasterProvider />
          {children}
          <Analytics />
          <CookieConsent />
          <CrispProvider />
        </body>
      </ClerkProvider>
    </html>
  );
}
