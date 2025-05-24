
'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { Layout } from './components/layout/layout';
import theme from './theme';

// Create Emotion cache for SSR
const cache = createCache({
  key: 'css',
  prepend: true,
});

// Font setup
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

