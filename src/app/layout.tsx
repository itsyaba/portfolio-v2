import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga, Dancing_Script, Fredoka } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
});
const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing_script",
});
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/facivon.ico",
        href: "/facivon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/facivon.ico",
        href: "/facivon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth ">
      <body
        className={twMerge(
          "bg-gray-900 text-white antialiased font-inter",
          inter.variable,
          calistoga.variable,
          dancing_script.variable,
          fredoka.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
