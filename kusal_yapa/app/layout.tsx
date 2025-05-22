'use client';

import { ThemeProvider } from '@mui/material/styles';
import { Layout } from './components/layout/layout';
import theme from './theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}