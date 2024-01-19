import React from 'react'

import { icons } from '../../../constants/icons.json'
import Icon from './index'

export default {
  component: Icon,
  title: 'Components/Icon',
  argTypes: {
    icon: {
      defaultValue: 'shield',
      options: icons,
      control: { type: 'select' },
    },
  },
}

const Template = (args) => (
  <>
    <Icon {...args} />
    <object type="image/svg+xml" data="/sprite.svg" width="0" height="0" />
  </>
)

export const Default = Template.bind({})
Default.args = {
  icon: 'shield',
}
