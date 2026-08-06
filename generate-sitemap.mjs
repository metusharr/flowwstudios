import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";

const sitemap = new SitemapStream({
  hostname: "https://floowstudios.com",
});

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

const lastmod = new Date().toISOString();

const routes = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
    lastmod,
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.8,
    lastmod,
  },
  {
    url: "/portfolio",
    changefreq: "weekly",
    priority: 0.9,
    lastmod,
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: 0.8,
    lastmod,
  },
];

routes.forEach((route) => sitemap.write(route));

sitemap.end();

await streamToPromise(sitemap);

console.log("✅ Sitemap generated successfully!");