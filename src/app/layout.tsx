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
  title: "Pixel Code Studio | Desenvolvimento Web & PWA Premium",
  description:
    "Construímos soluções digitais de alto impacto. Sites modernos, sistemas web escaláveis e aplicações PWA que transformam negócios.",
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
    title: "Pixel Code Studio | Desenvolvimento Web Premium",
    description:
      "Construímos soluções digitais de alto impacto. Portfolio de desenvolvimento web & PWA.",
    url: "https://pixelcodestudio.vercel.app",
    siteName: "Pixel Code Studio",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#6366f1",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="noise" />
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
