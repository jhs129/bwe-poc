import {
  builder,
  BuilderComponent,
  BuilderContent,
  useIsPreviewing,
} from "@builder.io/react";
import React from "react";
import Head from "next/head";
import DefaultErrorPage from "next/error";

import "/builder-registry";
import { initializeGoogleTagManager } from "@/js/tracking";
import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

function BlogArticle(props) {
  const article = props.article;
  const gtmId = props?.settings?.gtmIdentifier || "GTM-G-SH9PWT2FK1";
  const pageUrl = `https://jhsdigitalconsulting.com/blog/${props.handle}`;

  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(gtmId);
  }, []);

  const isPreviewing = useIsPreviewing();
  if (!article && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <Header
        navigation={props?.header || undefined}
        logo={props?.settings?.logo || undefined}
      />
      <main>
        <div className="site-container">
          <BuilderContent
            content={article}
            options={{ includeRefs: true }}
            model="blog-article"
          >
            {(data, loading, fullContent) => (
              <React.Fragment>
                <Head>
                  {/* Render meta tags from custom field */}
                  <title>{data?.title}</title>
                  <meta name="description" content={data?.blurb} />
                  {/* <meta property="og:image" content="http://www.jhsdigitalconsulting.com/images/logo-blue.png" /> */}
                  <meta property="og:image" content={data?.image} />
                  <meta property="og:title" content={data?.title || null} />
                  <meta property="og:description" content={data?.blurb} />
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content={pageUrl} />
                  <meta property="og:site_name" content="JHS Digital Consulting" />
                  <meta property="article:author" content="John Schneider"/>
                  <meta property="article:published_time" content={props?.createDate} />
                  <meta property="article:modified_time" content={props?.lastUpdateDate} />
                </Head>

                <img className="w-full" alt={data?.title} src={data?.image} />
                <h1 className="text-secondaryAccent pt-4">{data?.title}</h1>
                <h2 className="text-secondaryDark">{data?.subheadline}</h2>
                {/* Render the Builder drag/drop'd content */}
           
                <BuilderComponent
                name="blog-article"
                  content={fullContent}
                  options={{ includeRefs: true }}
                />
           
              </React.Fragment>
            )}
          </BuilderContent>
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

export async function getStaticProps({ params }) {
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

  const article =
    (await builder
      .get("blog-article", {
        // Include references, like our `author` ref
        options: { includeRefs: true },
        query: {
          // Get the specific article by handle
          "data.handle": params.handle,
        },
        enrich: true,
      })
      .promise()) || null;



      const ts1 = new Date(article.createdDate).toISOString();
      const ts2 = new Date(article.lastUpdated).toISOString();


  return {
    props: {
      article: article,
      handle: params.handle,
      createDate: ts1 || null,
      lastUpdateDate: ts2 || null,
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BlogArticle;
