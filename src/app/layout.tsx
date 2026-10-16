import ClientGuards from "@/components/UI/ClientGuards";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const SatoshiMedium = localFont({
  src: "../fonts/Satoshi/Fonts/Satoshi-Medium.ttf",
});

export const metadata: Metadata = {
  title: "CASHNET USA | Trusted Personal & Business Loans",
  description: "Fast, transparent personal loans and financial solutions. Apply online with CASHNET USA—your trusted partner in California.",
  openGraph: {
    title: "CASHNET USA | Trusted Personal & Business Loans",
    description: "Fast, transparent personal loans and financial solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${SatoshiMedium.className}`}>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <ClientGuards />
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Analytics/>
      </body>
    </html>
  );
}
