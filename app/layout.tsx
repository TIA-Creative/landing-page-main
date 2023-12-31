import "./globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "TIA Creative",
  description: "We promote humanitarian support in vulnerable communities through sports and arts initiatives",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
