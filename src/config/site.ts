export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Sentra Rent Car",
  description:
    "Sentra Rent Car adalah tempat penyewaan mobil terkemukan di depok jawa barat.",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "Dytama Studio",
  keywords: ["Rental Mobil Depok", "Rental Mobil", "Sewa Avanza"],
  imgUrl: "/assets/img/brand/sentra-color.png",
  imgUrl_white: "/assets/img/brand/sentra-color.png",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  address: process.env.NEXT_PUBLIC_ADDRESS || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  fax: process.env.NEXT_PUBLIC_FAX || "",
  siteUrl: process.env.SITE_URL,
  creator: "dytama-studio",
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
    { label: "Beranda", href: "/", haveChild: false },
    { label: "Mobil Kami", href: "#CarList", haveChild: false },
    { label: "Cara Sewa", href: "#HowToUse", haveChild: false },
    { label: "Mengapa Sentra", href: "#WhyChooseUs", haveChild: false },
    { label: "Testimonials", href: "#Testimonials", haveChild: false },
    { label: "Kontak", href: "/contact", haveChild: false },
  ],
};
