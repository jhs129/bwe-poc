import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../builder-registry";
import { initializeGoogleTagManager } from "@/js/tracking";
import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps = async ({ params }) => {

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

  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  // Return the page content as props
  return {
    props: {
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages
      .map((page) => String(page.data?.url))
      .filter((url) => url !== "/"),
    fallback: "blocking",
  };
}

// Define the Page component
export default function Page(props) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  const gtmId = props.settings?.gtmIdentifier || "GTM-G-SH9PWT2FK1";

  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(gtmId);
  }, []);

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!props.page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  const defaultDescription = 'This is our default description';
  const defaultTitle = 'Demo Site | Home';
  const defaultKeywords = 'keyword1, keyword2, keyword3';

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>
          {props?.page?.data?.title || `Home`}
        </title>
        <meta
          name="description"
          content={
            props?.page?.data?.description || defaultDescription
            
          }
        />
        <meta
          name="keywords"
          content={
            props?.page?.data?.keywords || defaultKeywords
            
          }
        />
      
        <meta property="og:image" content={props?.page?.data?.shareImage || null} />
        <meta property="og:title" content={props?.page?.data?.title || null} />
        <meta
          property="og:description"
          content={
            props?.page?.data?.description ||
            defaultDescription
          }
        />
      </Head>
      <Header
        navigation={props?.header || undefined}
        logo={props?.settings?.logo || undefined}
      />
      <main>
        <div className="site-container">
          {/* Render the Builder page */}
          <BuilderComponent model="page" content={props?.page || undefined} />
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
