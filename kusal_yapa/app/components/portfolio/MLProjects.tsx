'use client';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Divider } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { sectionTitleStyle, flexContainer } from '../../styles/commonStyles';
import { createAnimation, fadeInUp } from '../../styles/animations';

const MLProjects = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          ...sectionTitleStyle(theme),
          animation: createAnimation(fadeInUp, '1s'),
        }}
      >
        AI/ML Projects
      </Typography>
      <Box
        sx={{
          ...flexContainer.row,
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
            animation: createAnimation(fadeInUp, '1s'),
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
            animation: createAnimation(fadeInUp, '1s', 'ease-in-out', '0.2s'),
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
            animation: createAnimation(fadeInUp, '1s', 'ease-in-out', '0.1s'),
            flexShrink: 0,
          }}
        />
      </Box>
    </>
  );
};

export default MLProjects;