import '~/styles/global.scss'


import { useRouter } from 'next/router'
import { lazy, Suspense } from 'react'

import Footer from '~/components/footer'
import Navbar from '~/components/navbar'

const PreviewProvider = lazy(() => import('~/components/preview-provider'))
const VisualEditing = lazy(() => import('~/components/visual-editing'))


export default function App({
  Component,
  pageProps,
}) {
  const { draftMode, token, navigation } = pageProps
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <>
      {navigation && <Navbar />}
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
          <Suspense>
            <VisualEditing />
          </Suspense>
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      {navigation && <Footer />}
    </>
  )
}
