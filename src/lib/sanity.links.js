import { useRouter } from 'next/router'

import { Link } from '~/utils/types'

export function resolveHref(documentType, slug) {
  switch (documentType) {
    case PageTypes.Page:
      return slug ? (slug === '/' ? slug : `/${slug}`) : '/'
    case PageTypes.Post:
      return slug ? `/blogs/${slug}` : '/blogs/'
    default:
      return '/'
  }
}

export function resolveLink(link) {
  if (link.type === 'link') {
    return link.link
  } else if (link.type === 'page') {
    return resolveHref(link.page?.type, link.page?.slug)
  } else if (link.type === 'file') {
    return link.file?.asset.url
  }
  return ''
}

export const resolveLabel = (link) => {
  if (link.label) return link.label
  if (link.type === 'link') {
    return link.link
  } else if (link.type === 'page') {
    return link.page.title
  } else if (link.type === 'file') {
    return link.file?.asset.url
  }
  return ''
}

export const resolvePageLink = ({ type, slug = '', label = '' }) => {
  return {
    type: PageTypes.Page,
    page: {
      type,
      slug,
      title: label,
    },
  }
}

export const useActiveLink = (link, exact = false) => {
  const router = useRouter()
  const path = router.asPath
  return exact ? path === resolveLink(link) : path.startsWith(resolveLink(link))
}
