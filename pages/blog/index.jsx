import { builder } from "@builder.io/react";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

const ARTICLES_PER_PAGE = 10;

function BlogListings(props) {
  const articles = props.articles;
  const pageNumber = props.pageNumber;
  return (
    <>
      <Head>
        <title>
          {props?.page?.data?.title || `JHS Digital Consulting | Home`}
        </title>
        <meta
          name="description"
          content={
            props?.page?.data?.description ||
            `JHS Digital Consulting offers business transformation services emphasizing Experience Management, eCommerce, and Marketing Technology.`
          }
        />
        <meta
          name="keywords"
          content={
            props?.page?.data?.keywords ||
            `JHS Digital Consulting, John Schneider, Experience Management, eCommerce, Marketing Technology, Digital Transformation, Digital Consulting, Digital Strategy, Digital Marketing, Digital Experience, Digital Experience Platform, Digital Experience Cloud, Digital Experience Management, Digital Experience Platform, Digital Experience Cloud, Digital Experience Management, Digital Experience Optimization, Digital Experience Optimization`
          }
        />
      </Head>
      <Header
        navigation={props?.header || undefined}
        logo={props?.settings?.logo || undefined}
      />

      <main>
        <div className="site-container">
          <h1>Our Latest Blogs</h1>
          {/* Blog Listing Container */}
          <div className="flex flex-col">
            {articles.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col py-8 ${
                  index !== articles.length - 1 ? "border-b border-b-secondaryAccent" : ""
                }`}
              >
            
                <div
                  id="blog-image"
                  className={`flex flex-col space-y-4 md:flex-row md:space-y-0 gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2">
                    <img className="w-full" alt={item.data.title} src={item.data.image} />
                  </div>
                  <div id="blog-blurb" className="flex flex-col md:w-1/2">
                  <h2><Link href={`/blog/${item.data.handle}`}>{item.data.title}</Link></h2>
                  <h6 className="text-secondaryAccent">{new Date(item.data.date).toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h6>
                    <p className="line-clamp-6 font-base text-primaryDark">{item.data.blurb}</p>
                  </div>
                </div>
                </div>
            ))}
       </div>
          {/* Pagination */}
          <div>
            {pageNumber > 1 && (
              <a href={`/blog/page/${pageNumber - 1}`}>‹ Previous page</a>
            )}

            {articles.length > ARTICLES_PER_PAGE && (
              <a href={`/blog/page/${pageNumber + 1}`}>Next page ›</a>
            )}
          </div>
        </div>
      </main>
      <Footer
        navigation={props?.footer || undefined}
        socialLinks={props?.socialLinks || undefined}
        copyright={props?.settings?.copyright || undefined}
      />
    </>
  );
}

export async function getStaticProps({ query }) {
  const headerContent = await builder
    .get("navigation", { query: { name: "header-navigation" }, enrich: true })
    .promise();

  const footerContent = await builder
    .get("navigation", { query: { name: "footer-navigation" }, enrich: true })
    .promise();

  const socialLinks = await builder
    .get("social-links", { query: { name: "social-links" }, enrich: true })
    .promise();

  const siteProperties = await builder
    .get("site-properties", {
      query: { name: "site-properties" },
      enrich: true,
    })
    .promise();

  // Get the page number from the path or query parameter
  // In this example we are hardcoding it as 1
  const pageNumber = 1;
  const articles = await builder.getAll("blog-article", {
    // Include references, like the `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing
    omit: "data.blocks",
    limit: ARTICLES_PER_PAGE,
    offset: (pageNumber - 1) * ARTICLES_PER_PAGE,
  });


  const sortedArticles = articles.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB - dateA;
  });
  

  return {
    props: {
      articles: sortedArticles,
      pageNumber,
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
    },
    revalidate: 5,
  };
}

export default BlogListings;
