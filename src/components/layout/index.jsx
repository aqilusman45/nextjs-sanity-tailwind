import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout({ children, links ,footerLinks,socials,footerBottom}) {
 
  return (
    <>
      <Navbar {...links} />
      <main>{children}</main>
      <Footer {...footerBottom} footerLinks={footerLinks} {...socials} />
    </>
  )
}
