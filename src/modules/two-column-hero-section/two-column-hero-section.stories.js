import TwoColumnHeroSection from './index'
import { heroTwoColumnMock } from './mock'
const meta = {
  title: 'Modules/TwoColumnHeroSection',
  component: TwoColumnHeroSection,
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
  args: {
    ...heroTwoColumnMock,
  },
}
