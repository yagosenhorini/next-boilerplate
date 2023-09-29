import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@Lib/registry';
import { Providers } from './providers';
import StyledProvider from '@Lib/theme';
import HeaderMenu from '@Components/HeaderMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senhorini.dev',
  description: 'Fitness & Tecnologia',
  authors: [{ name: 'Yago Senhorini', url: 'https://senhorini.dev' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <StyledProvider>
            <HeaderMenu />
            <Providers>{children}</Providers>
          </StyledProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
