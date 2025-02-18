import { Analytics } from '@vercel/analytics/react'

import { GeistProvider, CssBaseline } from '@geist-ui/core'

import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import '../styles/custom.css'

export default function Nextra({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <GeistProvider themeType="dark">
        {/*<CssBaseline></CssBaseline>*/}
        <Component {...pageProps} />
      </GeistProvider>
      <Analytics />
    </>
  )
}
