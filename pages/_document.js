import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/logo_180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/logo_32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/logo_16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/icon/logo_48.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
