import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "The Flip Zone | Gymnastics, Tumbling & Preschool Programs",
    template: "%s | The Flip Zone",
  },
  description:
    "Find the right gymnastics, tumbling, preschool, or team program for your child — then enroll in seconds. Locations in Plainfield, Indiana and Bradenton, Florida.",
  keywords: [
    "gymnastics classes",
    "preschool gymnastics",
    "tumbling classes",
    "competitive gymnastics",
    "Plainfield Indiana",
    "Bradenton Florida",
    "Flip Zone",
  ],
  openGraph: {
    title: "The Flip Zone | Gymnastics, Tumbling & Preschool Programs",
    description:
      "Building confident kids through gymnastics. Programs in Indiana and Florida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
