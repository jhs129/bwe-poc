import { builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export const getServerSideProps = async ({ res }) => {
  // Fetch the builder content for the given page
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url,lastUpdated",
    options: { noTargeting: true },
  });
  console.log(pages);

  const posts = await builder.getAll("blog-article", {
    // We only need the URL field
    fields: "data.handle,lastUpdated",
    options: { noTargeting: true },
  });
  console.log(posts);

  let urls = [];
  pages.forEach((page) => {
    const updateTs = new Date(page.lastUpdated);
    const formattedDate = updateTs.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    urls.push({ url: page.data.url, lastUpdated: formattedDate });
  });

  posts.forEach((post) => {
    const updateTs = new Date(post.lastUpdated);
    const formattedDate = updateTs.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    urls.push({url: `/blog/${post.data.handle}`, lastUpdated: formattedDate});
  });


  const sitemap = generateSiteMap(urls);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  // Return the page content as props
  return {
    props: {
    },
  };
};


function generateSiteMap(urls) {
  let base = "http://www.jhsdigitalconsulting.com";

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <url><loc>${base}/blog</loc></url>\n`;

  urls.forEach((path) => {
    xml += `  <url>\n`;
    xml += `    <loc>${base}/${path.url}</loc>\n`;
//    xml += `    <loc>${path.url}</loc>\n`;
    xml += `    <lastmod>${path.lastUpdated}</lastmod>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  return xml;
}

// Define the Page component
export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
