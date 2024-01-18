import React from 'react'

import { allModes } from './modes'
import '../src/styles/global.scss'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}

export default preview
