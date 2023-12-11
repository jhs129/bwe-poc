import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../builder-registry";
import { initializeGoogleTagManager } from "@/js/tracking";
import { useEffect } from "react";
import Header from "@/components/layout/header2";
import Footer from "@/components/layout/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps = async ({ params }) => {

  const headerContent = await builder
    .get("navigation", { query: { name: "header-navigation2" }, enrich: true })
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



  // Return the page content as props
  // Return the page content as props
  return {
    props: {
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};


// Define the Page component
export default function Page(props) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();


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
      <main className="container mx-auto">

 
      </main>
      <Footer
        navigation={props?.footer || undefined}
        socialLinks={props?.socialLinks || undefined}
        copyright={props?.settings?.copyright || undefined}
      />
    </>
  );
}
