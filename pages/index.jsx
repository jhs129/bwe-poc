import Image from "next/image";
import Head from "next/head";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "../builder-registry";
import { initializeGoogleTagManager } from "@/js/tracking";
import {useEffect } from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Home(props) {

  const gtmId = props?.settings?.gtmIdentifier || undefined;

  if(gtmId) {
  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(gtmId);
  }, []);
  }

  const defaultDescription = 'This is our default description';
  const defaultTitle = 'Demo Site | Home';
  const defaultKeywords = 'keyword1, keyword2, keyword3';

  return (
    <>
      <Head>
        <title>
          {props?.page?.data?.title || defaultTitle}
        </title>
        <meta
          name="description"
          content={
            props?.page?.data?.description ||
            defaultDescription
          }
        />
        <meta
          name="keywords"
          content={props?.page?.data?.keywords || defaultKeywords}
        />
        <meta property="og:image" content={props?.page?.data?.shareImage || null} />

        <meta property="og:title" content={props?.page?.data?.title || null} />
        <meta
          property="og:description"
          content={props?.page?.data?.description || defaultDescription}
        />
      </Head>
      <Header
        navigation={props?.header || undefined}
        mobileNavigation={props?.headerMobile || undefined}    
        logo={props?.settings?.logo || undefined}
      />
      <main>

          {/* Render the Builder page */}
          <BuilderComponent model="page" content={props?.page || undefined} />
    

      </main>
      <Footer
        navigation={props?.footer || undefined}
        socialLinks={props?.socialLinks || undefined}
        logo={props?.settings?.altLogo || undefined}
        copyright={props?.settings?.copyright || undefined}
      />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page

  const desktopTopNav = await builder
    .get("navigation", { query: { name: "header-navigation" }, enrich: true })
    .promise();

    const mobileTopNav = await builder
    .get("navigation", { query: { name: "header-navigation-mobile" }, enrich: true })
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

  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
      enrich: true,
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      header: desktopTopNav?.data || null,
      headerMobile: mobileTopNav?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};
