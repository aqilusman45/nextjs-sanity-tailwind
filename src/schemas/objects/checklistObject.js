export const checklistObject = {
  title: 'Check list',
  type: 'object',
  name: 'checklistObject',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'list',
      name: 'list',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    },
  ],
}
