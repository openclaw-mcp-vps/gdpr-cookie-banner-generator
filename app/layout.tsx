import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Banner Generator – Generate Compliant Banners Instantly",
  description: "Create legally compliant GDPR/CCPA cookie banners with real-time preview and exportable JavaScript code. No coding required."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4492a376-e7ab-4284-acd0-e43d02b3e4bb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
