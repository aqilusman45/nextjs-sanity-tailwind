import { groq } from 'next-sanity'
import { useLiveQuery } from 'next-sanity/preview'
import React from 'react'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'

import ModuleRenderer, { MODULE_FRAGMENT } from '../components/module-renderer'
import SEO from '../components/seo'
import { getStaticPathsForDocumentType } from '../lib/getStaticPathsForDocumentType'
import { getNavigation } from '../lib/navigation'

export const getPageQuery = (slug) => groq`
  *[_type == "page" && slug.current == '${slug}'][0] {
    _type,
    "title": title,
    "slug": slug.current,
    ...,
    ${MODULE_FRAGMENT}
  }
`

const index = (props) => {
  const [page] = useLiveQuery(props?.page, getPageQuery(props?.slug))
  const { metaDescription = '', seoTitle = '' } = page || {}

  return (
    <>
      <SEO metaDescription={metaDescription} seoTitle={seoTitle} />
      <ModuleRenderer modules={page?.modules} />
    </>
  )
}

export const getStaticPaths = () => getStaticPathsForDocumentType('page')

export const getStaticProps = async ({ draftMode = false, params }) => {
  let slug = '/'
  if (Object.keys(params || {}).length > 0) {
    const { slug: currentSlug } = params || {}
    slug = currentSlug?.join('/')
  }
  const client = getClient(draftMode ? readToken : undefined)
  const pageQuery = await getPageQuery(slug)
  const navigation = await getNavigation()

  const data = await client.fetch(pageQuery)
  if (data?.length === 0) {
    return {
      notFound: true, // Corrected typo here
      props: {},
    }
  }
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      page: data,
      slug,
      navigation,
    },
    revalidate: 10,
  }
}

export default index
