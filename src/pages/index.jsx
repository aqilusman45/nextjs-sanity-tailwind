import { groq } from 'next-sanity'
import React from 'react'
import { getClient } from '~/lib/sanity.client'
import Layout from '../components/layout'

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
  return <Layout navData={props?.navData}>Index</Layout>
}

export const getStaticProps = async () => {
  const client = getClient()
  const pageQuery = getPageQuery()
  const navigation = await client.fetch(pageQuery)
  return {
    props: {
      navData: navigation,
    },
  }
}

export default index
