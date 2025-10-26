import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '@/styles/globals.css';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-provider';

// Import the Inter font with specific weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-inter'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Making Cents of Math</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>
      <ThemeProvider defaultTheme="light" storageKey="mcm-theme">
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
