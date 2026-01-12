import type { Metadata } from "next";
import "../styles/globals.css";
import { siteConfig } from "@/config/site";
import { AOSInit } from "@/components/aos";
import { fontSans } from "@/config/font";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "@/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

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
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/img/brand/dytama-icon.svg"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <meta
          name="google-site-verification"
          content="V2tw24D7BGzXxwKq3BKCcfmZkRaOq1uCMVM74x0o4JU"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <Script id="gtm-script" strategy="lazyOnload">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WWF8K3WZ');
        `}
        </Script>
      </head>
      <body className={fontSans.className}>
        <AOSInit />
        <NextTopLoader
          color="#D1F701"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #F5AD0D,0 0 5px #F5AD0D"
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
    </html>
  );
}
