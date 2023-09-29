'use client';

import styles from '../styles/index';
import { ThemeProvider } from 'styled-components';

function StyledProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={styles}>{children}</ThemeProvider>;
}

export default StyledProvider;
