import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { groq } from 'next-sanity'
import { useLiveQuery } from 'next-sanity/preview'
import { ParsedUrlQuery } from 'querystring'

import Layout from '~/components/layout'
import ModuleRenderer from '~/components/module-renderer'
import { getMeta } from '~/lib/meta'
import { IModule } from '~/lib/modules'
import { getNavigation } from '~/lib/navigation'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import type { SharedPageProps } from '~/pages/_app'

export const getPageQuery = (slug: string) => groq`
*[_type == 'page' && slug.current == '${slug}'][0] {
  title,
  "slug": slug.current,
}
`

export interface IPage {
  title?: string
  slug?: string
  modules?: IModule[]
}

interface Params extends ParsedUrlQuery {
  slug: string[]
}

function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [page] = useLiveQuery<IPage>(props.page, getPageQuery(props.slug))
  const { modules } = page || {}
  return (
    <Layout>
      <></>
      {/* <ModuleRenderer modules={modules} /> */}
    </Layout>
  )
}

export async function getStaticPaths() {
  const client = getClient()
  const slugs = await client.fetch(
    groq`*[_type == 'page']{'slug': slug.current}`,
  )
  return {
    paths:
      slugs?.map(({ slug }: { slug: string }) =>
        slug !== '/' ? `/${slug}` : `${slug}`,
      ) || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    page: IPage
    slug: string
  }
> = async ({ draftMode = false, params }) => {
  let slug = '/'
  if (Object.keys(params || {}).length) {
    const { slug: currentSlug } = params as Params
    slug = currentSlug?.join('/')
  }

  const client = getClient(draftMode ? readToken : undefined)
  if (!slug) throw new Error('No slug provided')
  const pageQuery = getPageQuery(slug)
  const page = await client.fetch(pageQuery)

  const meta = await getMeta('page', slug)
  const navigation = await getNavigation()

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      page,
      slug,
      meta,
      navigation,
    },
  }
}

export default Page
