export const img = {
  title: 'Image',
  type: 'image',
  name: 'img',
  fields: [
    {
      name: 'caption',
      title: 'Caption (in-image)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
