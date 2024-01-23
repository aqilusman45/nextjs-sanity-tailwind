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
            { type: 'slug', name: 'slug', title: 'Slug' },
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
                            { type: 'slug', name: 'slug', title: 'Slug' },
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