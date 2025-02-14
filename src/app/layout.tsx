import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import PrelineScript from "./libraries/preline";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Joe Tito | Full Stack Software & DevOps Engineer",
    template: "Joe Tito | %s",
  },
  description: "Professional resume of Joe Tito",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://joetito.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={metadata.description as string} />

        <meta name="twitter:site" content="@joetito" />
        <meta name="twitter:creator" content="@joetito" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta
          name="twitter:description"
          content={metadata.description as string}
        />
        {/* <meta
          name="twitter:image"
          content="https://preline.co/assets/img/og-image.png"
        /> */}

        <meta property="og:url" content="https://joetito.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Joe Tito" />
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        {/* <meta
          property="og:image"
          content="https://preline.co/assets/img/og-image.png"
        /> */}

        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <PrelineScript />
        <GoogleAnalytics gaId="G-HSLHKK409V" />
      </body>
    </html>
  );
}
