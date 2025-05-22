'use client';
import { Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Header />
      <Box sx={{ minHeight: '80vh' }}>{children}</Box>
      <Footer />
    </Container>
  );
};

export default Layout;