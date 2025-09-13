import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Rakshak Kumar - Full Stack Developer | Portfolio",
  description: "Rakshak Kumar is a passionate Computer Science Engineering student and Full Stack Developer specializing in MERN stack, Next.js, and modern web technologies. Explore my projects and skills.",
  keywords: "Rakshak Kumar, Full Stack Developer, MERN Stack, Next.js, React, Node.js, Portfolio, Computer Science, Web Development",
  authors: [{ name: "Rakshak Kumar" }],
  creator: "Rakshak Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakshakphogat.dev",
    title: "Rakshak Kumar - Full Stack Developer",
    description: "Passionate Computer Science Engineering student and Full Stack Developer specializing in modern web technologies.",
    siteName: "Rakshak Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakshak Kumar - Full Stack Developer",
    description: "Passionate Computer Science Engineering student and Full Stack Developer specializing in modern web technologies.",
    creator: "@rakshakphogat",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
