import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout({ children, navData }) {
  return (
    <>
      <Navbar {...navData?.links} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
