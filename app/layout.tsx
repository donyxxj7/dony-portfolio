import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteDescription, siteUrl } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Endony Paradela — Desenvolvedor de Software",
    template: "%s — Endony Paradela",
  },
  description: siteDescription,
  applicationName: "Portfólio de Endony Paradela",
  authors: [{ name: "Endony Paradela", url: siteUrl }],
  creator: "Endony Paradela",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Endony Paradela",
    title: "Endony Paradela — Produtos digitais do conceito ao deploy",
    description: siteDescription,
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Endony Paradela — Produtos digitais do conceito ao deploy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endony Paradela — Produtos digitais do conceito ao deploy",
    description: siteDescription,
    images: ["/og-image-1200x630.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
