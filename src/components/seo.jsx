import Head from 'next/head'

const SEO = ({ seoTitle, metaDescription }) => {
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={metaDescription} />
    </Head>
  )
}

export default SEO
