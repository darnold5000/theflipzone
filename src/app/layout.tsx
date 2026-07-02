import type { Metadata } from "next";
import { Oswald, Nunito } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "The Flip Zone | Gymnastics Classes for Kids in Indiana & Florida",
    template: "%s | The Flip Zone",
  },
  description:
    "Helping kids build confidence through gymnastics. Preschool, recreational, and team programs in Plainfield, Indiana and Bradenton, Florida. Find the right class for your child.",
  openGraph: {
    title: "The Flip Zone | Helping Kids Build Confidence Through Gymnastics",
    description:
      "From first cartwheels to competitive team — a place your child will love.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{/* nunito via font-sans */}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
