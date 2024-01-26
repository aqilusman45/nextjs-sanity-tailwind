import SvgAnimator from './index'

const meta = {
  title: 'Components/SvgAnimator',
  component: SvgAnimator,
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
    type: {
      defaultValue: 'netacea-fastly',
      options: [
        'netacea-akamai',
        'netacea-fastly',
        'netacea-shape-security',
      ],
      control: { type: 'select' },
    }
  },
}
export default meta;
const Template = (args) =><div className='border-gradient-testimonial-and-stats-slider p-10 w-[608px] h-[311px]'>  <SvgAnimator {...args} /></div> 

export const Default = Template.bind({})
Default.args = {
  type:'netacea-akamai'
}
