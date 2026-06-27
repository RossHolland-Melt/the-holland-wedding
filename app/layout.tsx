import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ross & Chloe · 10 April 2027",
  description:
    "Ross & Chloe are getting married on 10 April 2027 at Natte Valleij Estate in the Cape Winelands, South Africa. RSVP, the day's schedule, gifts and places to stay.",
  openGraph: {
    title: "Ross & Chloe · 10 April 2027",
    description:
      "Join us as we say our vows among the vines at Natte Valleij Estate, Cape Winelands.",
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
      className={`${cormorant.variable} ${jost.variable} ${pinyon.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
