import { ModulePreview } from '../components/modulePreview'

export const twoColumnHeroSection = {
  title: 'Two Column Hero Section',
  name: 'twoColumnHeroSection',
  type: 'object',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      initialValue: 'light',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'array',
      of: [{ type: 'button' }],
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      of: [{ type: 'img' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  components: {
    preview: ModulePreview,
  },
  storybook: {
    id: 'modules-twocolumnherosection--default',
  },
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
      media: 'desktopImage',
    },
    prepare({ title = 'No Label', subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}
