import type { Metadata } from "next";
import { Geist, Geist_Mono, Rajdhani } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";
import { dictionaries } from "../i18n/dictionaries";
import { resolveLocale } from "../i18n/locale";

const displayFont = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const locale = resolveLocale(
    requestHeaders.get("accept-language"),
    requestHeaders.get("cookie"),
  );
  const t = dictionaries[locale];
  return {
    metadataBase: new URL("https://portfolio.sectorzlabs.com"),
    title: "meaPERITIA — Garry Molleno Jr.",
    icons: {
      icon: [16, 32, 48, 192, 512].map((size) => ({
        url: `/favicon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: "image/png",
      })),
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    openGraph: {
      title: t.metadata.ogTitle,
      description: t.metadata.description,
      url: "https://portfolio.sectorzlabs.com/",
      siteName: t.metadata.siteName,
      images: [
        {
          url: "/opengraph.jpg",
          width: 1200,
          height: 630,
          alt: t.metadata.imageAlt,
        },
      ],
      locale: t.metadata.locale,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const nonce = requestHeaders.get("x-nonce") ?? undefined;
  const locale = resolveLocale(
    requestHeaders.get("accept-language"),
    requestHeaders.get("cookie"),
  );

  return (
    <html
      lang={locale === "zh" ? "zh-CN" : locale}
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script nonce={nonce} id="theme-init" strategy="beforeInteractive">
          {`try {
            document.documentElement.classList.toggle("dark", localStorage.getItem("portfolio-theme") !== "light");
          } catch {
            document.documentElement.classList.add("dark");
          }`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
        <Script
          nonce={nonce}
          src="https://www.googletagmanager.com/gtag/js?id=G-MNLJ711DQ8"
          strategy="afterInteractive"
        />
        <Script nonce={nonce} id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MNLJ711DQ8');`}
        </Script>
      </body>
    </html>
  );
}
