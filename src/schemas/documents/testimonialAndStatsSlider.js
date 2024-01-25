export const testimonialAndStatsSlider = {
    name: 'testimonialAndStatsSlider',
    title: 'Testimonial And Stats Slider',
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
        name: 'description',
        title: 'Description',
        type: 'bodyPortableText',
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
        name: 'button',
        title: 'Button',
        type: 'button',
        validation: (Rule) => Rule.required(), 
      },

      {
        name: 'sliderCards',
        title: 'Slider Cards',
        type: 'array',
        validation: (Rule) => Rule.required(), 
        of:[
            {
                title: "Card Object",
                name: "cardObject",
                type:"object",
                fields:[
                    {
                        title: 'Graph',
                        name: 'graph',
                        type: 'string',
                        initialValue: 'netacea-akamai',
                        options: {
                          list: [
                            { title: 'Netacea-Akamai', value: 'netacea-akamai' },
                            { title: 'Netacea-Fastly', value: 'netacea-fastly' },
                            { title: 'Netacea-Shape-Security', value: 'netacea-shape-security' },
                          ],
                        },
                      },
                    {
                        name: 'text',
                        title: 'Text',
                        type: 'bodyPortableText',
                        validation: (Rule) => Rule.required(), 
                    },
                    {
                        name: 'button',
                        title: 'Button',
                        type: 'button',
                        validation: (Rule) => Rule.required(), 
                      },
                ],
            }
        ] 
      },
      {
        name: 'statsCards',
        title: 'Stats Cards',
        type: 'array',
        of:[
            {
                title: "Stats Object",
                name: "statsObject",
                type:"object",
                fields:[
                    {
                        name: 'stats',
                        title: 'Stats',
                        type: 'string',
                        validation: (Rule) => Rule.required(), 
                    },
                    {
                        name: 'description',
                        title: 'Description',
                        type: 'string',
                        validation: (Rule) => Rule.required(), 
                    },
                ],
            }
        ] 
      },
      {
        title: "Testimonial",
        name: "testimonial",
        type:"object",
        fields:[
            {
                name: 'rating',
                title: 'Rating',
                type: 'number',
            },
            {
                name: 'subText',
                title: 'Sub Text',
                type: 'bodyPortableText',
            },
            {
                name: 'name',
                title: 'Name',
                type: 'string',
            },
            {
                name: 'button',
                title: 'Button',
                type: 'button',
              },
        ],
        preview: {
            select: {
              title: 'heading',
            },
          },
    }
    ],
    preview: {
      select: {
        title: 'identifier',
        
      },
    },
  }
  