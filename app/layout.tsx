import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Baatar-Ochir Sodbilegt | Software Engineer",
    template: "%s | Baatar-Ochir Sodbilegt Portfolio",
  },
  description:
    "Baatar-Ochir Sodbilegt is a software engineer focused on full-stack web development with React, Next.js, Node.js, and scalable backend systems.",
  keywords: [
    "Baatar-Ochir Sodbilegt",
    "Sodbilegt",
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "Baatar-Ochir Sodbilegt" }],
  creator: "Baatar-Ochir Sodbilegt",
  publisher: "Baatar-Ochir Sodbilegt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Baatar-Ochir Sodbilegt Portfolio",
    title: "Baatar-Ochir Sodbilegt | Software Engineer",
    description:
      "Software engineer specializing in full-stack development with React, Next.js, Node.js, and backend APIs.",
    images: [
      {
        url: "/images/design-mode/my_face.png",
        width: 1200,
        height: 630,
        alt: "Baatar-Ochir Sodbilegt - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baatar-Ochir Sodbilegt | Software Engineer",
    description:
      "Software engineer specializing in full-stack web development and backend APIs.",
    images: ["/images/design-mode/my_face.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/icon.svg", "/icon.png"],
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>

          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>

        <Analytics />
      </body>
    </html>
  )
}
