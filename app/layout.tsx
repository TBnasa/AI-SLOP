import type { Metadata } from "next";
import { VT323, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SlopProvider } from "@/context/SlopContext";
import Header from "@/components/Header";

const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-vt323" });
const ibmPlex = IBM_Plex_Mono({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-ibm-plex" });

export const metadata: Metadata = {
  title: "AI SLOPS - everything is very slow",
  description: "The platform that makes even the simplest things slow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${ibmPlex.variable} font-sans antialiased`}>
        <div className="crt-overlay" />
        <LanguageProvider>
          <SlopProvider>
            <div className="min-h-screen flex flex-col mesh-bg noise-bg screen-glow">
              <Header />
              <main className="flex-grow relative z-10">
                {children}
              </main>
            </div>
          </SlopProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
