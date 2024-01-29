import { ModulePreview } from '../components/modulePreview'

export const videoWithTextSection = {
  title: 'Video With Text Section',
  name: 'videoWithTextSection',
  type: 'object',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Back Video',
      name: 'backVideo',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Video Url',
      name: 'videoUrl',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  components: {
    preview: ModulePreview,
  },
  storybook: {
    id: 'modules-videowithtextsection--default',
  },
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
    },
    prepare({ title = 'No Label', subtitle }) {
      return {
        title,
        subtitle,
      }
    },
  },
}
