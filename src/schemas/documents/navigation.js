export const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  groups: [
    { name: 'top', title: 'Top', default: true },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
  ],
  fields: [
    {
      title: 'Navbar',
      name: 'links',
      type: 'navbarObject',
      group: 'top',
      validation: (Rule) => Rule.required(),
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
