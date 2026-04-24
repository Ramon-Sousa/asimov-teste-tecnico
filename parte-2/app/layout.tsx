import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Asimov Academy - Aprenda Python do zero e construa projetos reais com IA",
  description:
    "O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas de conteúdo, projetos com Python + IA, certificado reconhecido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${rethinkSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
