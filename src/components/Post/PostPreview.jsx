import { useLiveQuery } from 'next-sanity/preview'

import { POST_QUERY } from '~/lib/queries'

import Post from './index'

export default function PostPreview({
  post,
  params = {},
}) {
  const [data] = useLiveQuery(post, POST_QUERY, params)

  return <Post post={data} />
}
