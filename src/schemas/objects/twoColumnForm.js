import { ModulePreview } from '../components/modulePreview'

export const twoColumnForm = {
  title: 'Two Column Form',
  name: 'twoColumnForm',
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
      initialValue: 'dark',
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
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'string',
      initialValue: 'book-form',
      options: {
        list: [{ title: 'Book Form', value: 'book-form' }],
      },
    },
  ],
  components: {
    preview: ModulePreview,
  },
  storybook: {
    id: 'modules-twocolumnform--default',
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
