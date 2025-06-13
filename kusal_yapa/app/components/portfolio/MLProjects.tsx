'use client';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Divider } from '@mui/material';
import { useEffect } from 'react';

const MLProjects = () => {
  const theme = useTheme();

  useEffect(() => {
    // Define and apply styles on client side
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      AI/ML
      
    </>
  );
};

export default MLProjects;