import { Rule } from 'sanity'

import { metaField, metaGroup } from '~/lib/meta/'

import { getModulesField } from '../modules/modules-field'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'content', title: 'Content', default: true },
    metaGroup,
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      group: 'general',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    getModulesField('content'),
    metaField,
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }: Record<string, any>): any {
      return {
        title,
        subtitle: slug,
      }
    },
  },
}
