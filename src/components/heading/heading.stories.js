import Heading from './index'

const meta = {
  title: 'Components/Heading',
  component: Heading,
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

const Template = (args) => <Heading {...args} />

export const largeText = Template.bind({})
largeText.args = {
  type: 'h6',
  otherClasses:
    'font-Roboto-Slab text-[42px] lg:text-[52px] leading-[55.39px] lg:leading-[68.58px] font-bold text-primary_typography',
  children: 'Large Text Heading lorem ipsum dolor sit amet',
}

export const Heading1 = Template.bind({})
Heading1.args = {
  type: 'h1',
  children: 'H1 Heading lorem ipsum dolor sit amet',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  type: 'h2',
  children: 'H2 Heading lorem ipsum dolor sit amet',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  type: 'h3',
  children: 'H3 Heading lorem ipsum dolor sit amet',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  type: 'h4',
  children: 'H4 Heading lorem ipsum dolor sit amet',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  type: 'h5',
  children: 'H5 Heading lorem ipsum dolor sit amet',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  type: 'h6',
  children: 'H6 Heading lorem ipsum dolor sit amet',
}
