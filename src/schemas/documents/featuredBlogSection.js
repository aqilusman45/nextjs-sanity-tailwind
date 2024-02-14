export const featuredBlogSection = {
  title: 'Featured Blog Section',
  name: 'featuredBlogSection',
  type: 'document',
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
      title: 'Button',
      name: 'button',
      type: 'button',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 3) {
            return 'Maximum of 3 Columns allowed as per designs'
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'cards.0.cardImage',
    },
  },
}
