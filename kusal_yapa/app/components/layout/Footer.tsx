'use client';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 4, py: 2, textAlign: 'center', borderTop: '1px solid', borderColor: 'grey.300' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Kusal Madura Yapa. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="mailto:kusalmadurayapa@gmail.com" color="inherit" sx={{ mx: 1 }}>
          Email
        </Link>
        <Link href="https://github.com/Kusal-madura-yapa" target="_blank" color="inherit" sx={{ mx: 1 }}>
          GitHub
        </Link>
        <Link href="http://bit.ly/3KEuNjX" target="_blank" color="inherit" sx={{ mx: 1 }}>
          LinkedIn
        </Link>
      </Box>
    </Box>
  );
}