import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      prefix="og: http://ogp.me/ns#"
    >
      <Head />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/40005e1f7b.js" crossOrigin="anonymous"></script>
      <meta
        name="description"
        content="Bell"
      />
      <meta name="msvalidate.01" content="30BE06E4B78786F4D259474B6D32C265" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Demo Site | Home"
      />
      <meta
        property="og:description"
        content="This is our default description."
      />
      <meta property="og:url" content="https://jhsdigitalconsulting.com/" />
      <meta property="og:site_name" content="Builder.io Demo" />
      <meta
        property="og:image"
        content="/images/logo.webpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@demo" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
