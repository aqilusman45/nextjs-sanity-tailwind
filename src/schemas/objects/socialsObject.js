export const socialsObject = {
  name: 'socialsObject',
  title: 'Social Object',
  type: 'object',
  fields: [
    {
      title: 'Youtube Url',
      name: 'youtubeUrl',
      type: 'url',
      validation: (Rule) =>
      Rule.required().custom((value) => {
        if (!value?.startsWith(`http`)||!value?.startsWith(`https`)) {
          return 'Allowed Protocols are http and https'
        }
        return true
      }),
    },
    {
      title: 'Facebook Url',
      name: 'facebookUrl',
      type: 'url',
      validation: (Rule) =>
      Rule.required().custom((value) => {
        if (!value?.startsWith(`http`)||!value?.startsWith(`https`)) {
          return 'Allowed Protocols are http and https'
        }
        return true
      }),
    },
    {
      title: 'Linkedin Url',
      name: 'linkedInUrl',
      type: 'url',
      validation: (Rule) =>
      Rule.required().custom((value) => {
        if (!value?.startsWith(`http`)||!value?.startsWith(`https`)) {
          return 'Allowed Protocols are http and https'
        }
        return true
      }),
    },
    {
      title: 'Twitter Url',
      name: 'twitterUrl',
      type: 'url',
      validation: (Rule) =>
      Rule.required().custom((value) => {
        if (!value?.startsWith(`http`)||!value?.startsWith(`https`)) {
          return 'Allowed Protocols are http and https'
        }
        return true
      }),
    },
    {
      title: 'Podcast Url',
      name: 'podcastUrl',
      type: 'slug',
      validation: (Rule) =>
      Rule.required(),
    },
  ],
}
