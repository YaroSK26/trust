import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "../components/ToastProvider";
import { CrispProvider } from "../components/CrispProvider";
import { Analytics } from '@vercel/analytics/react';

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
          <ToasterProvider />
          {children}
          <Analytics />
          <CrispProvider />
        </body>
      </ClerkProvider>
    </html>
  );
}
