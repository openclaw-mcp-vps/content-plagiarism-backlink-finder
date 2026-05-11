import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CopyShield – Find Who Copied Your Content & Get Backlinks",
  description: "Detect content theft across the web, generate DMCA templates, and turn copiers into backlink opportunities. Built for bloggers, content marketers, and SEO agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="43ff6893-de0a-4830-9722-4fe70600ef34"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
