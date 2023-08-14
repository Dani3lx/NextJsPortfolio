'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Analytics } from '@vercel/analytics/react';
import Spline from '@splinetool/react-spline';



const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Daniel's Portfolio",
  description: "A website that show cases Daniel's work",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html >
  )
}
