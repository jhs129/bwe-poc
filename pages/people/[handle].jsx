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
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

function Page(props) {
  const person = props.person;
  const pageUrl = `https://localhost:3000/people/${props.handle}`;

  const isPreviewing = useIsPreviewing();
  if (!person && !isPreviewing) {
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
      <main className="container mx-auto">
          <BuilderContent
            content={person}
            options={{ includeRefs: true }}
            model="person"
          >
            {(data, loading, fullContent) => (
              <React.Fragment>
                <Head>
                  {/* Render meta tags from custom field */}
                  <title>{data?.title}</title>
                  <meta name="description" content={data?.blurb} />
                  {/* <meta property="og:image" content="http://www.jhsdigitalconsulting.com/images/logo-blue.png" /> */}
                  <meta property="og:image" content={data?.image} />
                  <meta property="og:title" content={data?.name || null} />
                  <meta property="og:description" content={data?.blurb} />
                  <meta property="og:type" content="article" />
                  <meta property="og:url" content={pageUrl} />
                  <meta property="og:site_name" content="Builder.io Demo" />
                </Head>

                <div className="flex flex-col md:flex-row w-full justify-between bg-secondaryLight ">
                  <div className="flex flex-col p-2">
                    <h1 className="text-primaryLight pt-4">{data?.name}</h1>
                    <h4 className="text-primaryLight">{data?.title}</h4>
                  </div>
                  <img className="md:w-60" alt={data?.name} src={data?.image} />
                </div>
                <div className="p-2 body-large">
                  {data?.blurb}
                </div>

                {/* Render the Builder drag/drop'd content */}

                <BuilderComponent
                  name="person"
                  content={fullContent}
                  options={{ includeRefs: true }}
                />
              </React.Fragment>
            )}
          </BuilderContent>
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

  const person =
    (await builder
      .get("person", {
        // Include references, like our `author` ref
        options: { includeRefs: true },
        query: {
          // Get the specific article by handle
          "data.handle": params.handle,
        },
        enrich: true,
      })
      .promise()) || null;

  return {
    props: {
      person: person,
      handle: params.handle,
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

export default Page;
