import type { Preview } from "@storybook/react";
// import { withThemeByDataAttribute } from '@storybook/addon-styling'
// import "../src/app/global.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export const decorators = [
//   withThemeByDataAttribute({
//     themes: {
//       ligth: 'ligth',
//       dark: 'dark',
//     },
//     defaultTheme: 'ligth',
//     attributeName: 'data-mode'
//   }),
// ]

export default preview;
