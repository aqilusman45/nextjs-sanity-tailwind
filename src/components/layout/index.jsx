import React from 'react'

export default function Layout({
  children,
}) {
  return (
    <main className="container" id="layout">
      {children}
    </main>
  )
}
