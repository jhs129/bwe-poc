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

  const gtmId = props.settings.gtmIdentifier || 'GTM-G-SH9PWT2FK1';

  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(gtmId);
  }, []);

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
        {/* <meta property="og:image" content="http://www.jhsdigitalconsulting.com/images/logo-blue.png" /> */}
        <meta property="og:image" content={props?.page?.data?.shareImage || null} />

        <meta property="og:title" content={props?.page?.data?.title || null} />
        <meta
          property="og:description"
          content={
            props?.page?.data?.description ||
            `JHS Digital Consulting offers business transformation services emphasizing Experience Management, eCommerce, and Marketing Technology.`
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

export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page

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
