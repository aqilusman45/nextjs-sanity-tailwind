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

const Template = (args) =><div className='border-gradient-testimonial-and-stats-slider px-10 py-10'>  <TestimonialStatsCard {...args} /></div> 

export const Default = Template.bind({})
Default.args = {
 ...mocks
}
