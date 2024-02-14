export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      initial: false,
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      title: 'Card Image',
      name: 'cardImage',
      type: 'img',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Sub Description',
      name: 'subDescription',
      type: 'bodyPortableText',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'cardImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
