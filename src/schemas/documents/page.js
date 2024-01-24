import { getModulesField } from '../modules/modules-field'

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
      group: 'meta',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      group: 'meta',
    },
    {
      name: 'title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    getModulesField('content'),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({ title, slug }) {
      return {
        title,
        subtitle: slug,
      }
    },
  },
}
