export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dytama – Jasa Pembuatan Website & Produk Digital Kreatif",
  description:
    "Dytama adalah personal branding dan creative digital space yang berfokus pada pembuatan website, desain UI/UX, produk digital, serta eksplorasi ide kreatif.",
  ogImage: "/assets/img/brand/dytama-logo.png",
  author: "aditya septama",
  keywords: [
    "Dytama",
    "Digital Creative",
    "UI UX Design",
    "Web Development",
    "Produk Digital",
    "Creative Lab",
    "Portfolio Aditya Septama",
    "Aditya Septama",
    "Website Professional",
    "Jasa buat website",
    "Jasa UI  & UX",
    "Buat Website Depok",
    "Buat Website Jakarta",
    "Design UI/UX Depok",
    "Design UI/UX Jakarta",
  ],
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  fax: process.env.NEXT_PUBLIC_FAX || "",
  siteUrl: process.env.SITE_URL,
  creator: "aditya-septama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextui.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description:
      "Make beautiful websites regardless of your design experience.",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/adityamo",
    facebook: "https://web.facebook.com/aditya.septama/",
    instagram: "https://www.instagram.com/dytama.studio/",
    twitter: "https://twitter.com/getnextui",
    dribbble: "https://dribbble.com/adityaamo",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
  verification: {
    google: "your-google-verification-code", // isi kalau pakai GSC
    yandex: "",
    yahoo: "",
  },
  navItems: [
    { label: "Home", href: "/", haveChild: false },
    { label: "Product", href: "/#ProductList", haveChild: false },
    { label: "Portofolio", href: "/portofolio", haveChild: false },
    { label: "Pricing", href: "/#PricingList", haveChild: false },
    { label: "About", href: "/about/aditya-septama", haveChild: false },
    // { label: "Contact", href: "/contact", haveChild: false },
  ],
};
