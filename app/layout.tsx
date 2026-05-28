import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SlopProvider } from "@/context/SlopContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

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
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <SlopProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </SlopProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
