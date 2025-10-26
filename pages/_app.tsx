import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '@/styles/globals.css';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from 'next/font/google';

// Import the Roboto font with specific weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Function to apply the theme
    const applyTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const themeClass = savedTheme === 'dark' ? 'dark' : 'light';
      document.documentElement.classList.add(themeClass);
    };

    // Apply the theme as soon as the app loads
    applyTheme();
  }, []);

  return (
    <>
      <Head>
        <title>Making Cents of Math</title> 
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
