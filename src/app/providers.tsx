import { PropsWithChildren } from 'react';

import GlobalStyles from '@Styles/global';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
