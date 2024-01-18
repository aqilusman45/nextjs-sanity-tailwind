import dynamic from 'next/dynamic'
import { SanityDocument } from 'next-sanity'

import Posts from '~/components/Posts'
import { POSTS_QUERY } from '~/lib/queries'
import { getClient } from '~/lib/sanity.client'
import { token } from '~/lib/token'

const PostsPreview = dynamic(() => import('~/components/Posts/PostsPreview'))

type PageProps = {
  posts: SanityDocument[]
  draftMode: boolean
  token: string
}
export default function Home(props: PageProps) {
  return props.draftMode ? (
    <PostsPreview posts={props.posts} />
  ) : (
    <Posts posts={props.posts} />
  )
}

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined)
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)

  return {
    props: {
      posts,
      draftMode,
      token: draftMode ? token : '',
    },
    revalidate: 10,
  }
}
