'use client';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Avatar } from '@mui/material';
import { createAnimation, fadeInUp, float } from '../../styles/animations';
import { gradientText } from '../../styles/commonStyles';
import { BaseComponentProps } from '../../types';

export default function AnimatedHero({ }: BaseComponentProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, sm: 8, md: 10 },
        mb: { xs: 4, md: 5 },
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "300px", sm: "400px", md: "500px" },
        backgroundColor: "background.paper",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          background: "linear-gradient(135deg, rgba(123, 63, 228, 0.3), rgba(206, 147, 216, 0.3))",
        }}
      />
      <Avatar
        src="profile.jpg"
        alt="Kusal Madura Yapa"
        sx={{
          width: { xs: 80, sm: 90, md: 100 },
          height: { xs: 80, sm: 90, md: 100 },
          mb: 2,
          border: "3px solid #bb86fc",
          boxShadow: "0 2px 4px rgba(98, 0, 234, 0.3)",
          zIndex: 2,
          animation: createAnimation(float, '4s', 'ease-in-out', '0s', 'infinite'),
        }}
      />
      <Typography
        variant="h2"
        sx={{
          color: "text.primary",
          zIndex: 2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          position: "relative",
          pb: 1,
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "50%",
            height: "3px",
            backgroundImage: gradientText(theme)?.background || 'linear-gradient(90deg, #bb86fc 0%, #6200ee 100%)',
          },
          animation: createAnimation(fadeInUp, '0.8s', 'ease-out'),
        }}
      >
        Kusal Madura Yapa
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: { xs: "90%", sm: "600px" },
          px: { xs: 2, sm: 3 },
          color: "text.secondary",
          zIndex: 2,
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          animation: createAnimation(fadeInUp, '1s', 'ease-out', '0.2s', 'backwards'),
        }}
      >
        Software Engineering Undergraduate | Innovator in AI & Full-Stack Development
      </Typography>
    </Box>
  );
}