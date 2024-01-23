export const button = {
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Primary-Arrow', value: 'primary-arrow' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Secondary-Arrow', value: 'secondary-arrow' },
          { title: 'Text-Link', value: 'text-link' },
          { title: 'Text-Link-Arrow', value: 'text-link-arrow' },
        ],
      },
    },
    {
      title: 'Mode',
      name: 'mode',
      type: 'string',
      initialValue: 'light',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
      },
      hidden: ({ parent }) => !parent?.variant || parent?.variant === '',
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Link',
      name: 'slug',
      type: 'slug',
      options: {
        isUnique: () => true,
      },
      validation: (Rule) =>
        Rule.custom((slug, { parent }) => {
          if (!slug && parent.action === 'link') {
            return 'slug is required'
          }
          return true
        }),
      // validation: (Rule) => Rule.required().custom((_, { parent }) => parent.action === "link" && false),
    },
  ],
  preview: {
    select: {
      label: 'label',
      slug: 'slug',
    },
    prepare({ label = 'No Label', slug = {} }) {
      return {
        title: label,
        slug: `/${slug.current}/`,
      }
    },
  },
}
