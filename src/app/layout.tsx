import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Guatavita Cabins - Your perfect mountain getaway",
  description: "Cozy cabins with splendid views of the Guatavita lake, perfect for a relaxing escape.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${merriweather.variable} ${lato.variable} root-layout-body`}
      >
        <Header />
        <main className="root-layout-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
