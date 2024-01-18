import { GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import { QueryParams, SanityDocument } from 'next-sanity'

import Post from '~/components/Post'
import { POST_QUERY, POSTS_SLUG_QUERY } from '~/lib/queries'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/token'

const PostPreview = dynamic(() => import('~/components/Post/PostPreview'))

type PageProps = {
  post: SanityDocument
  params: QueryParams
  draftMode: boolean
  token: string
}

export default function SinglePost(props: PageProps) {
  return props.draftMode ? (
    <PostPreview post={props.post} params={props.params} />
  ) : (
    <Post post={props.post} />
  )
}

export const getStaticProps = async ({ params = {}, draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)
  const post = await client.fetch<SanityDocument>(POST_QUERY, params)

  return {
    props: {
      post,
      params,
      draftMode,
      token: draftMode ? token : '',
    },
    revalidate: 10,
  }
}

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getClient().fetch(POSTS_SLUG_QUERY)

  return { paths, fallback: true }
}
