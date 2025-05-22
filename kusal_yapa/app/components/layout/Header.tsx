'use client';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Button } from '../common/Button';

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kusal Yapa
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button href="#about" color="inherit">
            About
          </Button>
          <Button href="#skills" color="inherit">
            Skills
          </Button>
          <Button href="#experience" color="inherit">
            Experience
          </Button>
          <Button href="#projects" color="inherit">
            Projects
          </Button>
          <Button href="#contact" color="inherit">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}