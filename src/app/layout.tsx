import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme.provider";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fabblog | All about technology",
  description:
    "A simple blog app to share news and updates about the world of technology"
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es">
      <body
        className={cn(
          "flex flex-col  min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <main className="flex-1 px-10 py-6 ">{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
