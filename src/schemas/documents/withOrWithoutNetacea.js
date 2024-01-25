export const withOrWithoutNetacea = {
  title: 'With Or Without Netacea',
  name: 'withOrWithoutNetacea',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Identifier',
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subText',
      title: 'SubText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thead',
      title: 'Thead',
      type: 'array',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 2) {
            return 'Maximum of 2 Columns allowed as per designs'
          }
          return true
        }),
      of: [
        {
          title: 'Card Object',
          name: 'cardObject',
          type: 'string',
        },
      ],
    },
    {
      title: 'Tbody',
      name: 'tbody',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'List',
          name: 'list',
          fields: [
            {
              type: 'string',
              title: 'Without Netacea',
              name: 'withoutNetacea',
            },
            {
              type: 'string',
              title: 'With Netacea',
              name: 'withNetacea',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backPattern',
      title: 'Back Pattern',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'heading',
      media: 'logo',
    },
  },
}
