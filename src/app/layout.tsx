import type { Metadata } from "next";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { chatWidget, siteConfig } from "@/lib/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Only the live site reports to Google Analytics, not local dev or Vercel previews.
const trackAnalytics =
  process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  verification: { google: siteConfig.googleSiteVerification },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${montserrat.variable}`}>
      <body>
        <AnnouncementBar />
        <Navbar />
        {/* Slide-in animations start off to one side; `overflow-x-clip` stops them
            widening the page and, unlike `hidden`, keeps position: sticky working. */}
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        {/* A plain async <script>, as Hello Gubby gives it, so the tag sits in the
            server-rendered HTML where their install check can find it. React
            hoists it into <head>. */}
        <script
          src={chatWidget.src}
          data-key={chatWidget.key}
          data-color={chatWidget.color}
          async
        />
      </body>
      {trackAnalytics && <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />}
    </html>
  );
}
