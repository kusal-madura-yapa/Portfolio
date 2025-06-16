import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { createAnimation, fadeInUp, pulseGlow } from "../../styles/animations";
import { gradientText } from "../../styles/commonStyles";
import { FooterProps, ContactLink } from "../../types";

// Using the imported FooterProps interface from types

import { useTheme } from '@mui/material/styles';

export default function Footer({ themeMode }: FooterProps) {
    const [year, setYear] = useState("2025");
    const theme = useTheme();
    useEffect(() => {
      setYear(new Date().getFullYear().toString());
    }, []);
    const contactLinks: ContactLink[] = [
      {
        icon: <Email />,
        label: "Email Kusal",
        href: "mailto:kusalmadurayapa@gmail.com",
        text: "kusalmadurayapa@gmail.com",
      },
      {
        icon: <Phone />,
        label: "Call Kusal",
        href: "tel:+94771196802",
        text: "+94 771 196 802",
      },
      {
        icon: <LinkedIn />,
        label: "LinkedIn Profile",
        href: "http://bit.ly/3KEuNjX",
        text: "LinkedIn",
        external: true,
      },
      {
        icon: <GitHub />,
        label: "GitHub Profile",
        href: "https://github.com/Kusal-madura-yapa",
        text: "GitHub",
        external: true,
      },
    ];
    return (
      <Box
        sx={{
          mt: 4,
          py: 4,
          textAlign: "center",
          borderTop: `1px solid ${themeMode === "dark" ? "#2a2a2a" : "#d4e6f1"}`,
          backgroundColor: "background.paper",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            ...gradientText(theme),
            animation: createAnimation(fadeInUp, '1s'),
            mb: 4,
          }}
        >
          Contact Me
        </Typography>
  
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            flexWrap: "wrap",
            maxWidth: { xs: "100%", sm: "1000px" },
            mx: "auto",
          }}
        >
          {contactLinks.map(({ icon, label, href, text, external }) => (
            <Button
              key={label}
              startIcon={icon}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              sx={{
                ...gradientText(theme),
                width: { xs: "80%", sm: "auto" },
                px: { xs: 1.5, sm: 2 },
                py: 0.5,
                borderRadius: "20px",
                transition: 'all 0.2s',
                '&:hover': {
                  color: 'text.primary',
                  boxShadow: `0 2px 4px rgba(${theme.palette.mode === 'dark' ? '123, 63, 228' : '2, 136, 209'}, 0.2)`,
                  background: 'none',
                  WebkitBackgroundClip: 'unset',
                  WebkitTextFillColor: 'inherit',
                },
              }}
            >
              {text}
            </Button>
          ))}
  
          <Button
            variant="contained"
            href="/Kusal_Yapa_CV.pdf"
            download
            aria-label="Download CV"
            sx={{
              mt: { xs: 1.5, sm: 0 },
              ...gradientText(theme),
              width: { xs: "80%", sm: "auto" },
              px: { xs: 1.5, sm: 2 },
              py: 0.5,
              borderRadius: "20px",
              animation: createAnimation(pulseGlow, '1.5s', 'ease-in-out', '0s', 'infinite'),
              '&:hover': {
                color: 'text.primary',
                boxShadow: `0 2px 4px rgba(${theme.palette.mode === 'dark' ? '123, 63, 228' : '2, 136, 209'}, 0.2)`,
                background: 'none',
                WebkitBackgroundClip: 'unset',
                WebkitTextFillColor: 'inherit',
              },
            }}
          >
            Download CV
          </Button>
        </Box>
  
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            display: "block",
            ...gradientText(theme),
          }}
        >
          © {year} Kusal Madura Yapa. All rights reserved.
        </Typography>
      </Box>
    );
  }
  