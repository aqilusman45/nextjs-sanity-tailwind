import { groq } from 'next-sanity'
import React from 'react'
import { getClient } from '~/lib/sanity.client'

export const getPageQuery = () => groq`
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

const index = (props) => {

  return <div>Index</div>
}

export const getStaticProps = async () => {
  const client = getClient()
  const pageQuery = getPageQuery()
  const navigation = await client.fetch(pageQuery)
  return {
    props: {
      navigation: navigation,
    },
  }
}

export default index
