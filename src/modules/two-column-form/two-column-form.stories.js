import TwoColumnForm from './index'
import { mocks } from './mocks'

const meta = {
  title: 'Modules/TwoColumnForm',
  component: TwoColumnForm,
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
  argTypes: {
    variant: {
      defaultValue: 'dark',
      options: ['dark', 'light'],
      control: { type: 'select' },
    },
  },
}

export default meta

export const Default = {
  args: { ...mocks },
}
