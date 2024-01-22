import { Link } from '@phosphor-icons/react'
import { Rule } from 'sanity'

import { resolveHref } from '~/lib/sanity.links'

// import { LinkTypes } from '../components/linkTypes'

const isPage = (parent) => parent?.type === 'page'
const isLink = (parent) => parent?.type === 'link'
const isFile = (parent) => parent?.type === 'file'

const isUrl = (url) =>
  ['http', 'https'].some((protocol) => url?.startsWith(`${protocol}://`))

export const linkFields = [
  {
    type: 'string',
    name: 'type',
    initialValue: 'page',
    options: {
      layout: 'radio',
      direction: 'horizontal',
      list: [
        { title: 'Page', value: 'page' },
        { title: 'Link', value: 'link' },
        { title: 'File', value: 'file' },
      ],
    },
    validation: (Rule) => Rule.required(),
  },
  {
    title: 'Page',
    name: 'page',
    type: 'reference',
    weak: true,
    to: [{ type: 'page' }],
    options: {
      disableNew: true,
    },
    hidden: ({ parent }) => !isPage(parent),
    validation: (Rule) =>
      Rule.custom(
        (value, { parent }) =>
          !isPage(parent) || typeof value !== 'undefined' || 'Required',
      ),
  },
  {
    name: 'link',
    type: 'url',
    hidden: ({ parent }) => !isLink(parent),
    validation: (Rule) =>
      Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
      }).custom(
        (value, { parent }) =>
          !isLink(parent) || typeof value !== 'undefined' || 'Required',
      ),
    // input: LinkTypes,
  },
  {
    name: 'file',
    type: 'file',
    hidden: ({ parent }) => !isFile(parent),
    validation: (Rule) =>
      Rule.custom(
        (value, { parent }) =>
          !isFile(parent) || typeof value !== 'undefined' || 'Required',
      ),
  },
  {
    title: 'Open in a new tab?',
    name: 'targetBlank',
    type: 'boolean',
    initialValue: false,
    hidden: ({ parent }) => !isLink(parent) || !isUrl(parent?.link),
  },
  {
    name: 'label',
    type: 'string',
    title: 'Label',
    description: 'Override text from page title or link (optional)',
  },
]

export const link = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: linkFields,
  preview: {
    select: {
      type: 'type',
      page: 'page.title',
      pageType: 'page._type',
      slug: 'page.slug.current',
      link: 'link',
      newTab: 'targetBlank',
      label: 'label',
    },
    prepare: ({ type, pageType, page, slug, link, newTab, label }) => {
      const isLink = type === 'link'
      return {
        title: isLink
          ? `${label || 'External link'}${newTab ? ' (open in new tab)' : ''}`
          : label ?? page,
        subtitle: isLink ? link : page ? resolveHref(pageType, slug) : '',
        media: Link,
      }
    },
  },
}
