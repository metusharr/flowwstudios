import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";

const sitemap = new SitemapStream({
  hostname: "https://floowstudios.com",
});

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

const routes = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/portfolio",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: 0.8,
  },
];

routes.forEach((route) => sitemap.write(route));

sitemap.end();

await streamToPromise(sitemap);

console.log("✅ Sitemap generated successfully!");