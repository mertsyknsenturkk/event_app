import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins  = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is a platform for event manegment",
  icons: {
    icon: '/assets/image/4019733.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={poppins.variable}>{children}</body>
      </ClerkProvider>
      
    </html>
  );
}
