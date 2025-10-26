import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Making Cents of Math</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
          <meta
            name="description"
            content="Making Cents of Math (MCM) - A high school initiative inspiring passion and understanding in youth through interactive workshops connecting classroom math with financial literacy."
          />
          <meta name="keywords" content="Making Cents of Math, MCM, math education, financial literacy, middle school, workshops, nonprofit, youth education" />
          <meta name="author" content="Making Cents of Math" />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="7 days" />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Making Cents of Math" />
          <meta property="og:description" content="Inspiring passion and understanding in youth through interactive workshops connecting classroom math with financial literacy." />
          <meta property="og:image" content="/meta.png" />
          <meta property="og:site_name" content="Making Cents of Math" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Making Cents of Math" />
          <meta name="twitter:description" content="Inspiring passion and understanding in youth through interactive workshops connecting classroom math with financial literacy." />
          <meta name="twitter:image" content="/meta.png" />
          <meta name="twitter:site" content="@makingcentsofmath" />
          <meta name="twitter:creator" content="@makingcentsofmath" />

          {/* Favicon and Theme */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#2563EB" />
          {/* Additional Meta Tags */}
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Making Cents of Math" />
          <meta name="application-name" content="Making Cents of Math" />
          <meta name="format-detection" content="telephone=no" />

          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          {/* Custom Theme Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.classList.add(theme);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
