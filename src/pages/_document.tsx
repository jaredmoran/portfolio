import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <title>Jared Moran</title>
      <Head>
        <meta
          name="description"
          content="This is my personal portfolio. I'm an engineer based in Visalia, California USA."
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/jared-favicon.png"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
