import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uma aplicação para cursos em vídeo",
  description: "uma descrição legal sobre a página",
};

type IRootLayout = Readonly<{children: React.ReactNode}>

export default function RootLayout({children,}: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body className={`${nunito.className} ${nunito.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
