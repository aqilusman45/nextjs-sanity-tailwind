export const featureSection = {
  title: 'Feature Section',
  name: 'featureSection',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Featured Cards',
      name: 'featuredCards',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Featured Cards Object',
          name: 'featuredCardsObject',
          type: 'object',
          fields: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'img',
              validation: (Rule) => Rule.required(),
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
              title: 'Button',
              name: 'button',
              type: 'button',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
    },
  },
}
