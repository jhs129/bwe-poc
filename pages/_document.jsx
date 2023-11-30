import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      prefix="og: http://ogp.me/ns#"
    >
      <Head />
      <meta
        name="description"
        content="JHS Digital Consulting offers business transformation services emphasizing Experience Management, eCommerce, and Marketing Technology."
      />
      <meta name="msvalidate.01" content="30BE06E4B78786F4D259474B6D32C265" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="JHS Digital Consulting - Change the Game and Win"
      />
      <meta
        property="og:description"
        content="JHS Digital Consulting offers business transformation services emphasizing Experience Management, eCommerce, and Marketing Technology."
      />
      <meta property="og:url" content="https://jhsdigitalconsulting.com/" />
      <meta property="og:site_name" content="JHS Digital Consulting" />
      <meta
        property="og:image"
        content="http://www.jhsdigitalconsulting.com/images/logo-blue.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@johnhschneider" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Inter:wght@200;300;400;800&display=swap"
        rel="stylesheet"
      /> */}
      {/* <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/40005e1f7b.js"
        crossOrigin="anonymous"
      ></script> */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-SH9PWT2FK1"></script>       */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
