import FeaturedBlogSection from './index'
import { mocks } from './mocks'

const meta = {
  title: 'Modules/FeaturedBlogSection',
  component: FeaturedBlogSection,
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
