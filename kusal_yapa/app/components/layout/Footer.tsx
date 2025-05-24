
'use client';

import { Box, Typography, Link } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2025'); // Default to current year

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <Box sx={{ mt: 4, py: 2, textAlign: 'center', borderTop: '1px solid', borderColor: 'grey.300' }}>
      <Typography variant="body2" color="text.secondary">
        © {year} Kusal Madura Yapa. All rights reserved.
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
