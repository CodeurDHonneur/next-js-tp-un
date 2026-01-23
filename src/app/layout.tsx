import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
