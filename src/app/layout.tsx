import type { Metadata } from "next";
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
  title: "My Online Portfolio | Garry Molleno Jr.",
  description: "Explore the portfolio of Garry Molleno Jr., a web developer specializing in custom dynamic web-based applications. Discover expertise in modern web technologies, recent projects, and professional digital solutions tailored for businesses of any scale.",
  keywords: "Garry Molleno Jr, web developer, portfolio, custom web applications, dynamic websites, digital solutions, full-stack development, front-end development, back-end development, skill set, recent projects, hire web developer",
  openGraph: {
    title: "Garry Molleno Jr. &ndash; Portfolio",
    description: "Explore the portfolio of Garry Molleno Jr., a web developer specializing in custom dynamic web-based applications. Discover expertise in modern web technologies, recent projects, and professional digital solutions tailored for businesses of any scale.",
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
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - Place immediately after <head> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MNLJ711DQ8"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MNLJ711DQ8');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
