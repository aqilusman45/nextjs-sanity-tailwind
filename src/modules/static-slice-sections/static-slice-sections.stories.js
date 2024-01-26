import StaticSliceSections from './index'
import { mocks } from './mocks'

const meta = {
  title: 'Modules/StaticSliceSections',
  component: StaticSliceSections,
  argTypes: {
    storybook_Type: {
      defaultValue: 'netaceaDifference',
      options: ['netaceaDifference'],
      control: { type: 'select' },
    },
  },
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Desktop',
        url: '',
        allowFullscreen: true,
      },
      {
        type: 'figma',
        name: 'Mobile',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
}

export default meta

export const Default = {
  args: { ...mocks },
}
