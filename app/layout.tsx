import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "StyleAI | Personalized Fashion Intelligence",
  description:
    "StyleAI analyzes your photo to craft personalized style, color, and hairstyle recommendations using AI.",
  keywords: [
    "StyleAI",
    "fashion AI",
    "personalized styling",
    "color analysis",
    "hairstyle recommendations"
  ],
  openGraph: {
    title: "StyleAI | Personalized Fashion Intelligence",
    description:
      "Upload your photo and get curated fashion, color, and hairstyle advice from StyleAI.",
    url: "https://styleai.app",
    siteName: "StyleAI",
    images: [
      {
        url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "StyleAI preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "StyleAI | Personalized Fashion Intelligence",
    description:
      "Upload your photo and get curated fashion, color, and hairstyle advice from StyleAI."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-soft-gradient">
        <NavBar />
        <main className="px-6 md:px-10 lg:px-16 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
