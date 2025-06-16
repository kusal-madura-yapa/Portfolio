import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

// Common gradient styles
export const gradientText = (theme: Theme): SxProps => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

// Section title styles
export const sectionTitleStyle = (theme: Theme): SxProps => ({
  ...gradientText(theme),
  mb: 2,
  textAlign: 'center',
  fontSize: { xs: '2rem', sm: '2.5rem' },
});

// Card hover effects
export const cardHoverEffect = (theme: Theme): SxProps => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 16px ${theme.palette.mode === 'dark' 
      ? 'rgba(0, 188, 212, 0.4)' 
      : 'rgba(2, 136, 209, 0.3)'}`,
    borderColor: theme.palette.primary.main,
  },
});

// Button hover effects
export const buttonHoverEffect = (theme: Theme): SxProps => ({
  transition: 'transform 0.2s ease, background 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 15px ${theme.palette.mode === 'dark' 
      ? 'rgba(0, 188, 212, 0.5)' 
      : 'rgba(2, 136, 209, 0.5)'}`,
  },
});

// Responsive spacing
export const responsiveSpacing = {
  section: { mb: { xs: 3, md: 4 } },
  sectionPadding: { py: { xs: 3, md: 4 } },
  contentPadding: { px: { xs: 2, sm: 3, md: 4 } },
};

// Scroll margin for section navigation
export const scrollMargin = {
  small: { scrollMarginTop: '80px' },
  medium: { scrollMarginTop: '100px' },
  large: { scrollMarginTop: '120px' },
};

// Card base styles
export const cardBaseStyle = (theme: Theme): SxProps => ({
  backgroundColor: 'background.paper',
  color: 'text.primary',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e0e0e0'}`,
  p: { xs: 2, sm: 3 },
});

// Flex container styles
export const flexContainer = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 2,
    justifyContent: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'center',
  },
};