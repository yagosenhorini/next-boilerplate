'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: ${({ theme }) => theme.fonts.fontPrimary};
}

body {
  background-color: ${({ theme }) => theme.colors.main};
}
`;

export default GlobalStyles;
