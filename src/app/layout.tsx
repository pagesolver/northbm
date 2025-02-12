import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "North Brisbane Maintenance - Handyman Services",
  description:
    "Professional handyman services in North Brisbane and Bribie Island. Expert in deck building, staircase repair, paver laying, and general carpentry.",
  keywords:
    "handyman, North Brisbane, Bribie Island, deck building, carpentry, home maintenance, repair services",
  openGraph: {
    url: "https://northbrisbanemaintenance.com.au",
    title: "North Brisbane Maintenance - Handyman Services",
    description:
      "Quality handyman services in North Brisbane and Bribie Island. Deck building, repairs, and more.",
    images: [
      {
        url: "https://northbrisbanemaintenance.com.au/nbmhs-crop.jpg",
        width: 800,
        height: 600,
        alt: "North Brisbane Maintenance Logo",
      },
    ],
    siteName: "North Brisbane Maintenance",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />
          <main className="max-w-(--breakpoint-xl) container py-6 space-y-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
