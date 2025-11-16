import { useEffect } from "react";
import { useLocation, type Location } from "react-router";

export const defaultSEO = {
  siteName: "Compro 425",
  title: "Compro 425",
  description: "Website company profile modern yang profesional dan responsif.",
  keywords: "company profile, web developer, compro425",
  url: "https://compro425.com",
  image: "https://compro425.com/og-default.jpg",
  robots: "index, follow",
};

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  robots?: string;
  url?: string;
}

export default function (props: HeadProps) {
  const location: Location = useLocation();

  const { title, description, keywords, image, robots, url } = {
    title: props.title ?? defaultSEO.title,
    description: props.description ?? defaultSEO.description,
    keywords: props.keywords ?? defaultSEO.keywords,
    image: props.image ?? defaultSEO.image,
    robots: props.robots ?? defaultSEO.robots,
    url: props.url ?? `${defaultSEO.url}${location.pathname}${location.search}`,
  };

  const setMeta = (name: string, content: string) => {
    if (!content) return;

    let meta =
      document.querySelector(`meta[name="${name}"]`) ||
      document.querySelector(`meta[property="${name}"]`);

    if (!meta) {
      meta = document.createElement("meta");

      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }

      document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
  };

  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", robots);

    // Canonical
    let canonical: HTMLLinkElement | null = document.querySelector(
      `link[rel="canonical"]`
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);

    // OG
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:image", image);
    setMeta("og:url", url);
    setMeta("og:type", "website");

    // Twitter
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:card", "summary_large_image");
  }, [title, description, keywords, image, url, robots]);

  return null;
}
