'use client';

import styles from '../styles/index';
import { ThemeProvider } from 'styled-components';

function StyledProvider({ children }: { children: JSX.Element }) {
  return <ThemeProvider theme={styles}>{children}</ThemeProvider>;
}

export default StyledProvider;
