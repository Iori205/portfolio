import type { Metadata } from "next"
import ClientInfoPage from "./client-page"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  title: "Contact & Connect | Baatar-Ochir Sodbilegt",
  description:
    "Connect with Baatar-Ochir Sodbilegt - Software Engineer. Find me on GitHub, send me an email, or download my resume.",
  keywords: [
    "contact Sodbilegt",
    "software engineer contact",
    "full-stack developer contact",
    "resume download",
    "developer social media",
  ],
  openGraph: {
    title: "Connect with Baatar-Ochir Sodbilegt | Software Engineer",
    description:
      "Get in touch, view social profiles, or download resume.",
    url: `${siteUrl}/contact`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Baatar-Ochir Sodbilegt",
    description: "Software Engineer. Download resume or connect on social media.",
  },
}

export default function InfoPage() {
  return <ClientInfoPage />
}
