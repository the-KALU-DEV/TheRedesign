import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import PreFooter from "./components/PreFooter";

//import { Red_Hat_Display } from "next/fonts/google";

export const metadata: Metadata = {
  title: "Codetivite",
  description: "Enriching your future",
  icons: {
    icon: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased`}>
        <Navbar />
        <main className="container">
        {children}
        <PreFooter />
        </main>
        
        <footer className="w-full max-w-screen-lg mx-auto px-6 sm:px-12">
      </footer>
      </body>
    </html>
  );
}

//${red_hat.className}