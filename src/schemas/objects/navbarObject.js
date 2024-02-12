export const navbarObject = {
  name: 'navbarObject',
  title: 'Navbar Object',
  type: 'object',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'img',
    },
    {
      title: 'Nested Links',
      name: 'nestedLinks',
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
            {
              title: 'Sub Links',
              name: 'subLinks',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'inline',
                  fields: [
                    { type: 'string', name: 'category', title: 'Category' },
                    { type: 'boolean', name: 'url', title: 'Url' },
                    {
                      type: 'slug',
                      name: 'slug',
                      title: 'Slug',
                      initialValue: false,
                      options: {
                        disableArrayWarning: true,
                      },
                      hidden: ({ parent }) => parent?.url !== true,
                    },
                    {
                      title: 'Links',
                      name: 'links',
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
                            {
                              title: 'Icon',
                              name: 'icon',
                              type: 'string',
                              options: {
                                list: [
                                  'active-bot-protection',
                                  'bot-attack-intel',
                                  'bussiness-login-icon',
                                  'account-tackover',
                                  'carding-fraud',
                                  'credential-stuffing',
                                  'marketing-analytics',
                                  'scaper-icon',
                                ],
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: 'button',
                      name: 'button',
                      title: 'Button',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Blog Image',
              name: 'blogImage',
              type: 'img',
            },
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Publish At',
              name: 'publishAt',
              type: 'date',
            },
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
            },
            {
              title: 'Sub Text',
              name: 'subText',
              type: 'bodyPortableText',
            },
            {
              type: 'button',
              name: 'button',
              title: 'Button',
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'button',
      title: 'Button',
      of: [{ type: 'button' }],
    },
  ],
}
