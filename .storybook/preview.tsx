import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import StyledProvider from '../src/lib/theme';

import styles from '../src/styles';
import GlobalStyles from '../src/styles/global';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: styles,
    },
    defaultTheme: 'light',
    Provider: StyledProvider,
    GlobalStyles,
  }),
];
