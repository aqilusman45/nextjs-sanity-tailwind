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
              type: 'string',
              initialValue: 'account-takeover',
              options: {
                list: [
                  { title: 'Account Takeover', value: 'account-takeover' },
                  { title: 'Carding fraud', value: 'carding-fraud' },
                  { title: 'Credential stuffing', value: 'credential-stuffing' },
                  { title: 'Fake account creation', value: 'fake-account-creation' },
                  { title: 'Loyalty point fraud', value: 'loyalty-point-fraud' },
                  { title: 'Scalper bots', value: 'scalper-bots' },
                  { title: 'Skewed analytics', value: 'skewed-analytics'},
                  { title: 'Web scraping', value: 'web-scraping' },
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
