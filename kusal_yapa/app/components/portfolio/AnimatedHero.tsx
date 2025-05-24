'use client';
import { useEffect, useState } from 'react';
import { Box, Avatar, Typography } from '@mui/material';

export default function AnimatedHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 6, sm: 8, md: 10 },
        mb: { xs: 4, md: 6 },
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: '200px', sm: '250px', md: '350px' },
        background: 'linear-gradient(135deg, #1e88e5 0%, #42a5f5 70%)',
        ...(isMounted && {
          animation: 'gradientShift 10s infinite alternate',
          '@keyframes gradientShift': {
            from: { background: 'linear-gradient(135deg, #1e88e5 0%, #42a5f5 70%)' },
            to: { background: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 70%)' },
          },
        }),
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.8), rgba(66, 165, 245, 0.8))',
        }}
      />
      <Avatar
        src="profile.jpg"
        alt="Kusal Madura Yapa"
        sx={{
          width: { xs: 100, sm: 120, md: 140 },
          height: { xs: 100, sm: 120, md: 140 },
          mb: 3,
          border: '5px solid white',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          zIndex: 2,
          ...(isMounted && {
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-12px)' },
              '100%': { transform: 'translateY(0)' },
            },
          }),
        }}
      />
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)',
          zIndex: 2,
          ...(isMounted && {
            animation: 'fadeInUp 1s ease-out',
            '@keyframes fadeInUp': {
              from: { opacity: 0, transform: 'translateY(30px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }),
        }}
      >
        Kusal Madura Yapa
      </Typography>
      <Typography
        variant="h6"
        sx={{
          opacity: 0.9,
          maxWidth: { xs: '90%', sm: '800px' },
          px: { xs: 2, sm: 4 },
          color: 'white',
          textShadow: '0 2px 5px rgba(0,0,0,0.2)',
          zIndex: 2,
          ...(isMounted && {
            animation: 'fadeInUp 1.2s ease-out 0.3s backwards',
          }),
        }}
      >
        Software Engineering Undergraduate | Innovator in AI & Full-Stack Development
      </Typography>
    </Box>
  );
}
