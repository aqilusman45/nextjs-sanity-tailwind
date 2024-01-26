import TestimonialStatsCard from './index'
import {mocks} from './mocks'

const meta = {
  title: 'Components/TestimonialStatsCard',
  component: TestimonialStatsCard,
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
export default meta;

export const Default = {
   args: {...mocks},
}
