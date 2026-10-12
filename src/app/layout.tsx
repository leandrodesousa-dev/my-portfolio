import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import HeaderClientWrapper from "@/components/Header/HeaderClientWrapper";
import { LanguageProvider } from "@/components/Language/LanguageProvider";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { ThemeScript } from "@/components/Theme/ThemeScript";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sharedMetadata: Metadata = {
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],

    other: [
      {
        rel: "icon",
        url: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const texts = dictionaries[await getLocale()];
  return {
    ...sharedMetadata,
    title: `Leandro de Sousa | ${texts.role}`,
    description: texts.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider locale={locale}>
          <ThemeProvider>
            <HeaderClientWrapper />
            <div id="main-content">{children}</div>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
