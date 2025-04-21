import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaspersky News",
  description: "We tell, you read.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
