import IframePreview from '../components/IframePreview'

export const iframe = {
  name: 'iframe',
  type: 'object',
  title: 'Iframe',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Source URL',
    },
    {
      name: 'height',
      description: 'px will be appended',
      type: 'number',
      title: 'Height',
      validation: (Rule) => Rule.required(),
    },
  ],
  components: {
    preview: IframePreview,
  },
  preview: {
    select: {
      url: 'url',
      height: 'height',
    },
  },
}
