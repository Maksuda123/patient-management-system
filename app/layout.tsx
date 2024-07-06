import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Health Care",
  description: "Patient Management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased", inter.className
        )}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
