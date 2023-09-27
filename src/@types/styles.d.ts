import styles from '@Styles/index';

type Theme = typeof styles;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
