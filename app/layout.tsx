import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRE Vercel GHA Lab",
  description: "GitHub Actions経由でVercelデプロイを学ぶための練習用アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
