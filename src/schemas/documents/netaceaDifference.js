export const netaceaDifference = {
    name: 'netaceaDifference',
    title: 'NetaceaDifference',
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
        name: 'cards',
        title: 'Cards',
        type: 'array',
        validation: (Rule) =>
      Rule.required().custom((value) => {
        if (value.length > 3) {
          return 'Maximum of 3 Columns allowed as per designs'
        }
        return true
      }),
        of:[
            {
                title: "Card Object",
                name: "cardObject",
                type:"object",
                fields:[
                    {
                        name: 'image',
                        title: 'Image',
                        type: 'img',
                        validation: (Rule) => Rule.required(), 
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
                    }
                ]

            }
        ] 
      },
    ],
    preview: {
      select: {
        title: 'identifier',
      },
    },
  }
  