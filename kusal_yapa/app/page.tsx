'use client';
import { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Divider,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { ProjectCard } from './components/portfolio/ProjectCard';
import { SkillTag } from './components/portfolio/SkillTag';
import dynamic from 'next/dynamic';
import EducationSection from './components/portfolio/EducationSection';
import Footer from './components/layout/Footer';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/layout/Header';

const AnimatedHero = dynamic(() => import('./components/portfolio/AnimatedHero'), {
  ssr: false,
});

// Define themes
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7b3fe4', // Changed to a richer purple
      light: '#b388ff',
    },
    background: {
      default: '#0a0a0a', // Darker background
      paper: '#1c1c1c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #7b3fe4 30%, #b388ff 90%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, #b388ff 30%, #7b3fe4 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1c1c1c',
          border: '1px solid #2a2a2a',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(123, 63, 228, 0.2)',
          },
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1', // Blue for light theme
      light: '#4fc3f7',
    },
    background: {
      default: '#e3f2fd', // Light blue background
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#444444',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #0288d1 30%, #4fc3f7 90%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, #4fc3f7 30%, #0288d1 90%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #d4e6f1',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(2, 136, 209, 0.2)',
          },
        },
      },
    },
  },
});

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  // Detect system theme preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setIsMounted(true);
    // Update themeMode when system theme changes
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Container
        sx={{
          py: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: '1400px',
          backgroundColor: 'background.default',
          minHeight: '100vh',
        }}
      >
        {/* Theme Toggle Button */}
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Hero Section */}
        {isMounted && <AnimatedHero />}

        {/* About */}
        <Box id="about" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#7b3fe4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#b388ff' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            About
          </Typography>
          <ProjectCard
            description="Software Engineering student at the University of Westminster, skilled in full-stack development and AI. Led an adaptive gamification platform using Deep Q-Networks and contributed to the NBQSA Merit Award-winning OPTIMAXER AI (2023). Passionate about agile development and innovative solutions."
            sx={{
              p: { xs: 2, sm: 3 },
              maxWidth: { xs: '100%', sm: '600px' },
              mx: 'auto',
              backgroundColor: 'background.paper',
              color: 'text.primary',
              borderRadius: '12px',
            }}
          />
          <Divider sx={{ my: 2, borderColor: themeMode === 'dark' ? '#2a2a2a' : '#d4e6f1' }} />
        </Box>

        {/* Skills */}
        <Box id="skills" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#7b3fe4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#b388ff' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            Skills
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 0.8, sm: 1 },
              justifyContent: 'center',
              maxWidth: { xs: '100%', sm: '800px' },
              mx: 'auto',
            }}
          >
            {[
              'OOP',
              'Mobile App Dev',
              'Web Dev',
              'AI Integration',
              'Agile',
              'Version Control',
              'Time Management',
              'Teamwork',
              'Learning Ability',
              'Problem Solving',
              'Leadership',
              'Java',
              'Python',
              'Swift',
              'JavaScript',
              'Next.js',
              'Nest.js',
              'Flask',
              'iOS (SwiftUI)',
              'Android',
              'AWS',
              'Azure',
              'Figma',
              'GitHub',
            ].map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'text.primary',
                  px: { xs: 1.5, sm: 2 },
                  py: 0.5,
                  borderRadius: '16px',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  '&:hover': {
                    bgcolor: 'primary.light',
                    boxShadow: `0 2px 4px rgba(${
                      themeMode === 'dark' ? '123, 63, 228' : '2, 136, 209'
                    }, 0.2)`,
                  },
                }}
              />
            ))}
          </Box>
          <Divider sx={{ my: 2, borderColor: themeMode === 'dark' ? '#2a2a2a' : '#d4e6f1' }} />
        </Box>

        {/* Education */}
        <EducationSection />

        {/* Experience */}
        <Box id="experience" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#7b3fe4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#b388ff' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            Experience
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <ProjectCard
              title="Trainee Software Engineer"
              description="99X Technology Limited, Colombo, Sri Lanka (Jul 2023 - Jul 2024)\n- Optimized AI prompts for enhanced system accuracy\n- Served as Scrum Master, facilitating agile processes\n- Contributed to OPTIMAXER AI (NBQSA Merit 2023)\n- Developed: Employee Upskilling App, AI Web Solutions, HR Bot, AI Research Hub"
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
              }}
            />
          </Box>
          <Divider sx={{ my: 2, borderColor: themeMode === 'dark' ? '#2a2a2a' : '#d4e6f1' }} />
        </Box>

        {/* Projects */}
        <Box id="projects" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#7b3fe4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#b388ff' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            Projects
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            <ProjectCard
              title="Adaptive Gamification Model"
              description="Final Year Project (2024-2025)\n- Implemented a DQN-based gamification system to personalize programming education\n- Featured dynamic difficulty adjustment, feedback, and leaderboards to boost engagement and retention for Gen Z learners"
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
              }}
            />
          </Box>
          <Divider sx={{ my: 2, borderColor: themeMode === 'dark' ? '#2a2a2a' : '#d4e6f1' }} />
        </Box>

        {/* Achievements & Volunteer Work */}
        <Box id="achievements" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#7b3fe4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#b388ff' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            Achievements & Volunteer Work
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <ProjectCard
              title="Achievements"
              description="2023\n- NBQSA Merit for OPTIMAXER AI\n2021-2022\n- 1st Runner Up, OpenHack 2.0\n- Finalist, RevolUX 2.0\n- IEEEXtreme 16.0\n- Hacktoberfest 2022"
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
                flex: { md: '1 1 45%' },
              }}
            />
            <ProjectCard
              title="Volunteer Work"
              description="2023-2024 Music Innovative Member, Xternship Program (IIT)\n2022-2023 STEM UP Foundation Supporter"
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
                flex: { md: '1 1 45%' },
              }}
            />
          </Box>
          <Divider sx={{ my: 2, borderColor: themeMode === 'dark' ? '#2a2a2a' : '#d4e6f1' }} />
        </Box>

        <Footer themeMode={'dark'} />
      </Container>
    </ThemeProvider>
  );
}