import Document, { Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
  render() {
    return <html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript> </NextScript>
      </body>
    </html>
  }
}