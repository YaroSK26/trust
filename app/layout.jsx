import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "../components/ToastProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TRUST',
  description: 'Build trust with anyone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
