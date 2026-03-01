import type { Metadata } from "next";
import "../styles/globals.css";
import { buildDynamicSiteConfig, siteConfig } from "@/config/site";
import { fontSans } from "@/config/font";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "@/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { api } from "@/libs/trpc/server";
import { SiteConfigProvider } from "@/libs/site/site-config.provider";

const baseUrl = siteConfig.siteUrl ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
  },
  verification: {
    google: siteConfig.verification.google,
    yandex: siteConfig.verification.yandex,
    yahoo: siteConfig.verification.yahoo,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let dynamicConfig = siteConfig; // fallback default

  try {
    const landingInfo = await api.landing.getPublicLandingInfo();

    if (landingInfo?.data) {
      dynamicConfig = buildDynamicSiteConfig(landingInfo.data);
    }
  } catch (error) {
    console.log("Landing API not ready, using default config");
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <meta
          name="google-site-verification"
          content="V2tw24D7BGzXxwKq3BKCcfmZkRaOq1uCMVM74x0o4JU"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </head>
      <SiteConfigProvider value={dynamicConfig}>
        <body className={fontSans.className}>
          <NextTopLoader
            color="#4338CA"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #4338CA,0 0 5px #4338CA"
          />
          <ToastContainer
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Providers>{children}</Providers>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WWF8K3WZ"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </SiteConfigProvider>
    </html>
  );
}
