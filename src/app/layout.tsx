import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Code Studio | Portfolio de Desenvolvimento Web & PWA",
  description:
    "Portfolio profissional de desenvolvimento web, sites modernos e sistemas PWA. Construindo soluções digitais sólidas como arranha-céus.",
  keywords: [
    "desenvolvimento web",
    "PWA",
    "portfolio",
    "sistemas web",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Pixel Code Studio" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Pixel Code Studio | Portfolio",
    description:
      "Construindo soluções digitais sólidas como arranha-céus. Portfolio de desenvolvimento web & PWA.",
    url: "https://pixelcodestudio.vercel.app",
    siteName: "Pixel Code Studio",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-[#e8e8ed]`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
