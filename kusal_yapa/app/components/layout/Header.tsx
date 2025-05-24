// components/Header.tsx
'use client';
import { Box, Button } from '@mui/material';

const sections = [
  'About Me',
  'Skills',
  'Education',
  'Experience',
  'Projects',
  'Achievements',
  'Volunteer Work',
  'Contact',
];

export default function Header() {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        bgcolor: 'background.paper',
        zIndex: 1100,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        py: 2,
        px: { xs: 2, md: 4 },
        animation: 'slideInDown 0.5s ease-out',
        '@keyframes slideInDown': {
          from: { transform: 'translateY(-100%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        {sections.map((section) => (
          <Button
            key={section}
            href={`#${section.toLowerCase().replace(' ', '-')}`}
            sx={{
              bgcolor: 'transparent',
              color: 'text.primary',
              '&:hover': { bgcolor: 'primary.main', color: 'white' },
              animation: 'fadeInScale 0.7s ease-out',
              '@keyframes fadeInScale': {
                from: { transform: 'scale(0.95)', opacity: 0 },
                to: { transform: 'scale(1)', opacity: 1 },
              },
            }}
          >
            {section}
          </Button>
        ))}
      </Box>
    </Box>
  );
}