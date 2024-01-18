import { groq } from 'next-sanity'

import { getClient } from './sanity.client'

export const getStaticPathsForDocumentType = async (type) => {
  const client = getClient()
  const slugs = await client.fetch(groq`*[_type == '${type}']{'slug': slug.current}`)
  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
