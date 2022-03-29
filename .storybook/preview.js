import { withThemesProvider } from 'themeprovider-storybook'

import { themes } from '@/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemesProvider(
    Object.entries(themes).map(([name, colors]) => {
      return {
        name,
        ...colors,
      }
    }),
  ),
]
