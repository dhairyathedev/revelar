import Head from 'next/head'
import React from 'react'
import Faq from '../components/Faq'
import FormContainer from '../components/FormContainer'

export default function index() {
  return (
    <>
      <Head>
      <title>Revelar | URL Revelar</title>
      <meta name="title" content="Revelar | URL Revelar" />
      <meta name="description" content="Reveal any shortened links that people send you. It will tell you what the actual link is." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://revelar.netlify.app/" />
      <meta property="og:title" content="Revelar | URL Revelar" />
      <meta property="og:description" content="Reveal any shortened links that people send you. It will tell you what the actual link is." />
      <meta property="og:image" content="https://revelar.netlify.app/banner.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://revelar.netlify.app/" />
      <meta property="twitter:title" content="Revelar | URL Revelar" />
      <meta property="twitter:description" content="Reveal any shortened links that people send you. It will tell you what the actual link is." />
      <meta property="twitter:image" content="https://revelar.netlify.app/banner.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <FormContainer />
      <h1 className="text-center text-2xl font-black mt-6">FAQs 🌟</h1>
      <Faq />
    </>
  )
}
