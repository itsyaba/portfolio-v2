import type { Metadata } from "next";
import HomePageClient from "./home-page-client";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Yeabsira - Full-Stack Developer",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yeabsira",
    url: siteConfig.url,
    jobTitle: "Full-Stack Developer",
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <HomePageClient />
    </main>
  );
}
