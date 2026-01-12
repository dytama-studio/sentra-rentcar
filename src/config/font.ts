import { Manrope } from "next/font/google";

export const fontSans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
