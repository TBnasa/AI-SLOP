import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SlopProvider } from "@/context/SlopContext";
import Header from "@/components/Header";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const jetbrains = JetBrains_Mono({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-jetbrains" });

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
      <body className={`${bebas.variable} ${jetbrains.variable} font-sans`}>
        <div className="noise-overlay" />
        <LanguageProvider>
          <SlopProvider>
            <div className="min-h-screen flex flex-col bg-white">
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
