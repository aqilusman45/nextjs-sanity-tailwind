import { useLiveQuery } from 'next-sanity/preview'

import { POSTS_QUERY } from '~/lib/queries'

import Posts from './index'

export default function PostsPreview({
  posts = [],
}) {
  const [data] = useLiveQuery(posts, POSTS_QUERY)

  return <Posts posts={data} />
}
