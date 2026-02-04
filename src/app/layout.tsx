import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/layout/Header";
import FooterPage from "@/layout/Footer";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "TechRadar H5 – Le radar des meilleurs articles de programmation",
  description: "TechRadar H5 est un moteur de recherche d’articles de programmation pensé pour les étudiants et développeurs. Veille, apprentissage et compréhension.",
  keywords: [
    "programmation",
    "articles programmation",
    "développement web",
    "Next.js",
    "JavaScript",
    "veille technologique",
  ],
  alternates: {
    canonical: '/articles', // On dit à Google : "La seule vraie page, c'est /articles"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white`}
      >
        <HeaderPage />
        <main className="grow bg-yellow-100">
          {children}
        </main>
        <FooterPage />
      </body>
    </html>
  );
}