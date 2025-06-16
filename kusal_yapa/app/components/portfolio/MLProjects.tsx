'use client';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Divider, Grid, Paper } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const MLProjects = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          animation: 'fadeInUp 1s ease-in-out',
          mb: 2,
          textAlign: 'center',
          background: `linear-gradient(45deg, ${
            theme.palette.mode === 'dark' ? '#00bcd4' : '#0288d1'
          } 30%, ${
            theme.palette.mode === 'dark' ? '#4dd0e1' : '#4fc3f7'
          } 90%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        AI/ML Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          paddingBottom: '16px',
        }}
      >
        <ProjectCard
          title="Adaptive Gamification Model"
          description="Final Year Project (2024-2025)\n- Implemented a DQN-based gamification system to personalize programming education\n- Featured dynamic difficulty adjustment, feedback, and leaderboards to boost engagement\n- Utilized reinforcement learning to adapt to individual learning patterns"
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            animationDelay: '0s',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="OPTIMAXER AI"
          description="NBQSA Merit Award (2023)\n- Contributed to AI-powered optimization platform for business processes\n- Implemented natural language processing for automated data extraction\n- Developed machine learning models for predictive analytics"
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            animationDelay: '0.2s',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="AI Research Hub"
          description="Internal Research Project\n- Developed a platform for collaborative AI research and experimentation\n- Implemented computer vision algorithms for image recognition tasks\n- Created interactive visualizations for complex neural network architectures"
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            animationDelay: '0.4s',
            flexShrink: 0,
          }}
        />
      </Box>
    </>
  );
};

export default MLProjects;