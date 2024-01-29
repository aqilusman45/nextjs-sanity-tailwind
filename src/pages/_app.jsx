import '~/styles/global.scss'

import { lazy, Suspense } from 'react'

import Layout from '../components/layout'

const PreviewProvider = lazy(() => import('~/components/preview-provider'))
const VisualEditing = lazy(() => import('~/components/visual-editing'))

export default function App({ Component, pageProps }) {
  const { draftMode, token, navigation } = pageProps

  return (
    <>
      <Layout {...navigation}>
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
      </Layout>
    </>
  )
}
