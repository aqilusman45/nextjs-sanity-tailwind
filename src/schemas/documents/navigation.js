const protocols = ['http', 'https', 'mailto', 'tel']
export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  groups: [
    { name: 'top', title: 'Top' },
    { name: 'footer', title: 'Footer', default: true },
    { name: 'social', title: 'Social' },
    { name: 'footerBottom', title: 'Footer Bottom' },
  ],
  fields: [
    {
      title: 'Navbar',
      name: 'links',
      type: 'navbarObject',
      group: 'top',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Social',
      name: 'socials',
      type: 'socialsObject',
      group: 'social',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Footer Bottom',
      name: 'footerBottom',
      type: 'object',
      fields: [
        {
          title: 'Copyright',
          name: 'copyright',
          type: 'bodyPortableText',
        },
        {
          title: 'Contact Title',
          name: 'contactTitle',
          type: 'string',
        },
        {
          title: 'Contact Href',
          name: 'contactHref',
          type: 'string',
          description: `add with mailto`,
          validation: (Rule) =>
            Rule.required().custom((value) => {
              if (!value?.startsWith(`mailto:`)) {
                return 'Add mailto in start'
              }
              return true
            }),
        },
        {
          title: 'Links',
          name: 'links',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'inlineLinks',
              fields: [
                { type: 'string', name: 'title', title: 'Title' },
                {
                  type: 'slug',
                  name: 'slug',
                  title: 'Slug',
                  options: {
                    disableArrayWarning: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      group: 'footerBottom',
    },
    {
      title: 'Footer Links',
      name: 'footerLinks',
      group: 'footer',
      type: 'array',

      of: [
        {
          type: 'object',
          title: 'Column',
          name: 'column',
          fields: [
            { type: 'string', name: 'title', title: 'Title' },
            {
              title: 'Parent Links',
              name: 'parentLinks',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'inline',
                  fields: [
                    { type: 'string', name: 'title', title: 'Title' },
                    {
                      title: 'Child Links',
                      name: 'childLinks',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'inline',
                          fields: [
                            { type: 'string', name: 'title', title: 'Title' },
                            {
                              type: 'slug',
                              name: 'slug',
                              title: 'Slug',
                              options: {
                                disableArrayWarning: true,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (value.length > 4) {
            return 'Maximum of 4 Columns allowed as per designs'
          }
          return true
        }),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      }
    },
  },
}
