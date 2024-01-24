import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import { groq } from 'next-sanity'

export default function Layout({
  children,
  links,
  footerLinks,
  socials,
  footerBottom,
}) {
  return (
    <>
      {Object?.keys(links || {})?.length > 0 && (
        <>
          <div className="h-14 w-full bg-blue-600 lg:h-88"></div>{' '}
          <Navbar {...links} />
        </>
      )}
      <main>{children}</main>
      {footerLinks?.length > 0 && (
        <Footer {...footerBottom} footerLinks={footerLinks} {...socials} />
      )}
    </>
  )
}

export const navFragment = groq`
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
