import { groq } from 'next-sanity'

import { fragment as footerFragment } from '~/components/footer'
import { fragment as navbarFragment } from '~/components/navbar'

import { getClient } from './sanity.client'

export const navigationQuery = groq`
*[_type == "navigation"][0]{
...,
links{
  ...,
  "logo": logo.asset->{
    ...,
 },
nestedLinks[]{
  ...,
  subLinks[]{
    ...,
  }
}
}
}
`

export const getNavigation = async () => {
  const client = getClient()
  return await client.fetch(navigationQuery)
}
