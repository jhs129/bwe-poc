import "@/styles/globals.css";
import { Inter, IBM_Plex_Sans } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  style: ['normal'],
  weights: [200, 300, 400],
  display: "swap",
  variable: '--font-inter',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: '400',
  display: "swap",
  variable: '--font-ibm-plex-sans',
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.variable} ${ibmPlexSans.variable} font-sans`}>
          <Component {...pageProps} />
      </main>
    </>
  );
}
