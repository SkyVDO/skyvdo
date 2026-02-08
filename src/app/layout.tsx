import type { Metadata } from "next";
import { Bebas_Neue, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SunDown Entertainment — Premium Outdoor Cinema Rentals",
  description:
    "Transform any space into an open-air cinema. Premium inflatable screens, 4K projectors, and cinematic sound for unforgettable movie nights under the stars. Chennai & Coimbatore.",
  keywords: [
    "outdoor cinema",
    "movie night",
    "inflatable screen rental",
    "outdoor projector",
    "Chennai",
    "Coimbatore",
    "open-air cinema",
    "backyard movie",
  ],
  openGraph: {
    title: "SunDown Entertainment — Premium Outdoor Cinema Rentals",
    description:
      "Transform any space into an open-air cinema. Premium screens, projectors, and sound for unforgettable movie nights.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
