import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClickSpark from "./components/clickspark/clickspark";

export const metadata: Metadata = {
  title: "Aspen",
  description: "Aspen's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
      
      <ClickSpark sparkColor="rgba(197, 138, 74, 0.7)" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        {children}

</ClickSpark>
      </body>
    </html>
  );
}
