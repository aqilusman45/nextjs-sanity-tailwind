import VideoWithSection from './index'
import { mock } from './mock'
const meta = {
  title: 'Modules/VideoWithSection',
  component: VideoWithSection,
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
  args: { ...mock },
}
