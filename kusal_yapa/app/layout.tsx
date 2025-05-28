"use client";
import { Container, Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
    <head>
      <title>Kusal Yapa</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />  
      <meta charSet="UTF-8" />
      <meta name="description" content="Kusal Yapa - Your source for quality content" />
      <meta name="keywords" content="Kusal Yapa, quality content, blog, articles" />
      <meta name="author" content="Kusal Yapa" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles/global.css" />
    </head>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
};

export default Layout;
