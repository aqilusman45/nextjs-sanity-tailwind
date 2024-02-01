export const productCardsSection = {
  title: 'Product Cards Section',
  name: 'productCardsSection',
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
      title: 'Cards',
      name: 'cards',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Products Cards Object',
          name: 'productsCardsObject',
          type: 'object',
          fields: [
            {
              title: 'Lottie File',
              description: 'Upload the Lottie animation file here',
              name: 'lottieFile',
              type: 'file',
              validation: (Rule) => Rule.required(),
              options: {
                accept: '.json',
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
              title: 'Button',
              name: 'button',
              type: 'button',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'backVector',
      title: 'Back Vector',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'backVector',
      subtitle: 'heading',
    },
  },
}
