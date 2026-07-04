import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Templo Emanuel | Iglesia del Nazareno en North Bergen, NJ",
  description:
    "Templo Emanuel, Iglesia del Nazareno en North Bergen, New Jersey. Una casa para todas las naciones. Cultos en español — visítanos en 1001 82nd St.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-palette="calido"
      className={`${fraunces.variable} ${albert.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
