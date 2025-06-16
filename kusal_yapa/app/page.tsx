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
  css,
} from '@mui/material';
import { ProjectCard } from './components/portfolio/ProjectCard';
import { SkillTag } from './components/portfolio/SkillTag';
import dynamic from 'next/dynamic';
import EducationSection from './components/portfolio/EducationSection';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AWSProjects from './components/portfolio/AWSProjects';
import MLProjects from './components/portfolio/MLProjects';


const AnimatedHero = dynamic(() => import('./components/portfolio/AnimatedHero'), {
  ssr: false,
});

// Define themes
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Cyan for a modern, vibrant look
      light: '#4dd0e1',
    },
    background: {
      default: '#121212', // Softer dark gray for better readability
      paper: '#1e1e1e', // Slightly lighter for cards
    },
    text: {
      primary: '#e0e0e0', // Softer white for readability
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#e0e0e0',
          transition: 'color 0.3s ease', // Smooth color transition
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
          color: '#ffffff',
          transition: 'transform 0.2s ease, background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, #4dd0e1 30%, #00bcd4 90%)',
            transform: 'scale(1.05)', // Slight scale on hover
            boxShadow: '0 0 15px rgba(0, 188, 212, 0.5)', // Glow effect
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1e1e1e 0%, #252525 100%)', // Subtle gradient
          border: '1px solid #333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)', // Lift effect on hover
            boxShadow: '0 8px 16px rgba(0, 188, 212, 0.4)', // Cyan glow
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#444', // Softer divider color
          transition: 'border-color 0.3s ease',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1',
      light: '#4fc3f7',
    },
    background: {
      default: '#e3f2fd',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Slightly softer black for readability
      secondary: '#616161',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#212121',
          transition: 'color 0.3s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #0288d1 30%, #4fc3f7 90%)',
          color: '#ffffff',
          transition: 'transform 0.2s ease, background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, #4fc3f7 30%, #0288d1 90%)',
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(2, 136, 209, 0.5)', // Blue glow
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', // Subtle gradient
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(2, 136, 209, 0.3)', // Blue glow
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#d4e6f1',
          transition: 'border-color 0.3s ease',
        },
      },
    },
  },
});

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setIsMounted(true);
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
        maxWidth={false}
        disableGutters
        sx={{
          py: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'background.default',
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
          overflowX: 'hidden',
        }}
      >
        {/* Theme Toggle Button with Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            '&:hover': {
              transform: 'rotate(15deg)',
            },
            transition: 'transform 0.2s ease',
          }}
        >
          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Animated Hero with Fade-In */}
        <Box className="fadeInUp">
          <AnimatedHero />
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: 'fadeInUp 1s ease-in-out',
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#00bcd4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
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
              animation: 'fadeInUp 1s ease-in-out',
            }}
          />
          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: 'fadeInUp 1s ease-in-out',
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#00bcd4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
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
                  transition: 'transform 0.2s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    transform: 'scale(1.1)', // Scale on hover
                    boxShadow: `0 4px 8px rgba(${
                      themeMode === 'dark' ? '0, 188, 212' : '2, 136, 209'
                    }, 0.3)`,
                  },
                  animation: 'float 2s infinite', // Apply float animation directly
                }}
              />
            ))}
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Education Section */}
        <EducationSection title={''} />

        {/* Experience Section */}
        <Box id="experience" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: 'fadeInUp 1s ease-in-out',
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#00bcd4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
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
              description={
                "99X Technology Limited, Colombo, Sri Lanka (Jul 2023 - Jul 2024)\n" +
                "- Optimized AI prompts for enhanced system accuracy\n" +
                "- Served as Scrum Master, facilitating agile processes\n" +
                "- Contributed to OPTIMAXER AI (NBQSA Merit 2023)\n" +
                "- Developed: Employee Upskilling App, AI Web Solutions, HR Bot, AI Research Hub"
              }
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
                animation: 'fadeInUp 1s ease-in-out',
              }}
            />
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: 'fadeInUp 1s ease-in-out',
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#00bcd4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem' },
            }}
          >
            Projects
          </Typography>
          
          {/* ML Projects Section */}
          <Box id="ml-projects" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
            <MLProjects />
          </Box>
          {/* Projects are now in their respective components */}
          
        </Box>
        {/* AWS Projects Section */}
        <Box id="aws-projects" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <AWSProjects />
        </Box>

        {/* Achievements & Volunteer Work Section */}
        <Box id="achievements" sx={{ mb: { xs: 3, md: 4 }, scrollMarginTop: '80px' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              animation: 'fadeInUp 1s ease-in-out',
              mb: 2,
              textAlign: 'center',
              background: `linear-gradient(45deg, ${
                themeMode === 'dark' ? '#00bcd4' : '#0288d1'
              } 30%, ${themeMode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
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
              description={
                "2023\n" +
                "- NBQSA Merit for OPTIMAXER AI\n" +
                "2021-2022\n" +
                "- 1st Runner Up, OpenHack 2.0\n" +
                "- Finalist, RevolUX 2.0\n" +
                "- IEEEXtreme 16.0\n" +
                "- Hacktoberfest 2022"
              }
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
                flex: { md: '1 1 45%' },
                animation: 'fadeInUp 1s ease-in-out',
              }}
            />
            <ProjectCard
              title="Volunteer Work"
              description={
                "2023-2024\n" +
                "- Music Innovative Member, Xternship Program (IIT)\n" +
                "2022-2023\n" +
                "- STEM UP Foundation Supporter"
              }
              sx={{
                p: { xs: 2, sm: 3 },
                maxWidth: { xs: '100%', sm: '600px' },
                backgroundColor: 'background.paper',
                color: 'text.primary',
                borderRadius: '12px',
                flex: { md: '1 1 45%' },
                animation: 'fadeInUp 1s ease-in-out',
              }}
            />
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
        

       
      </Container>
      <Footer themeMode={themeMode as 'light' | 'dark'} />
    </ThemeProvider>
  );
}