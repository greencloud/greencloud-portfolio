import type { Metadata } from "next";
import { Geist, Geist_Mono, Rajdhani } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.sectorzlabs.com"),
  title: "meaPERITIA — Garry Molleno Jr.",
  description:
    "Explore the portfolio of Garry Molleno Jr., a web developer specializing in custom dynamic web-based applications. Discover expertise in modern web technologies, recent projects, and professional digital solutions tailored for businesses of any scale.",
  keywords:
    "Garry Molleno Jr, web developer, portfolio, custom web applications, dynamic websites, digital solutions, full-stack development, front-end development, back-end development, skill set, recent projects, hire web developer",
  openGraph: {
    title: "Garry Molleno Jr. — Portfolio",
    description:
      "Explore the portfolio of Garry Molleno Jr., a web developer specializing in custom dynamic web-based applications. Discover expertise in modern web technologies, recent projects, and professional digital solutions tailored for businesses of any scale.",
    url: "https://portfolio.sectorzlabs.com/",
    siteName: "My Online Portfolio | Garry Molleno Jr.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
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
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MNLJ711DQ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MNLJ711DQ8');`}
        </Script>
      </body>
    </html>
  );
}
