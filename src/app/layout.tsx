import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxim Caffee",
  description: "Generated by create next app",
  icons: 'https://i.etsystatic.com/25272370/r/il/9b3275/5486687228/il_fullxfull.5486687228_3lhx.jpg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
