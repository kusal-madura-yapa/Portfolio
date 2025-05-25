import { Container, Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container >
     {children}
    </Container>
  );
};

export default Layout;