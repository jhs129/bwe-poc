import "@/styles/globals.css";
import { Open_Sans, Inter } from "next/font/google";


const primaryFont = Open_Sans({
  subsets: ["latin"],
  style: ['normal', 'italic' ],
  weights: [200, 300, 400, 500, 600, 700, 800, 900],
  display: "swap",
  variable: '--font-primary',
});

const secondaryFont = Inter({
  subsets: ["latin"],
  weight: '400',
  display: "swap",
  variable: '--font-secondary',
});


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${primaryFont.variable} ${secondaryFont.variable} font-sans`}>
          <Component {...pageProps} />
      </main>
    </>
  );
}
