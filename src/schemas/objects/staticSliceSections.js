import { ModulePreview } from '../components/modulePreview'

export const staticSliceSections = {
  title: 'Static Slice Sections',
  name: 'staticSliceSections',
  type: 'object',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Section',
      name: 'section',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      to: [
        { type: 'netaceaDifference' },
        { type: 'withOrWithoutNetacea' },
        {
          type: 'testimonialAndStatsSlider',
        },
        {
          type: 'productCardsSection',
        },
        {
          type: 'featureSection',
        },
        {
          type: 'featuredBlogSection',
        },
      ],
    },
  ],
  components: {
    preview: ModulePreview,
  },
  storybook: {
    id: 'modules-staticslicesections--default',
  },
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({ title = 'No Label' }) {
      return {
        title,
      }
    },
  },
}
