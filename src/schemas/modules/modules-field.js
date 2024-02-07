import { ModulesInput } from '../components/modulesInput'

export const getModulesField = (group) => {
  return {
    name: 'modules',
    type: 'array',
    title: 'Modules',
    group,
    of: [
      {
        type: 'twoColumnHeroSection',
      },
      {
        type: 'staticSliceSections',
      },
      {
        type: 'videoWithTextSection',
      },
      {
        type: 'twoColumnForm',
      },
    ],
    components: {
      input: ModulesInput,
    },
  }
}
