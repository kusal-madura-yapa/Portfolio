import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

type FooterProps = {
  themeMode: "light" | "dark";
};

export default function Footer({ themeMode }: FooterProps) {
    const [year, setYear] = useState("2025");
  
    useEffect(() => {
      setYear(new Date().getFullYear().toString());
    }, []);
  
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
            mb: 4,
            background: `linear-gradient(45deg, ${
              themeMode === "dark" ? "#7b3fe4" : "#0288d1"
            } 30%, ${themeMode === "dark" ? "#b388ff" : "#4fc3f7"} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
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
          {[
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
          ].map(({ icon, label, href, text, external }) => (
            <Button
              key={label}
              startIcon={icon}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              sx={{
                bgcolor: "transparent",
                color: "text.primary",
                background: `linear-gradient(45deg, ${
                  themeMode === "dark" ? "#7b3fe4" : "#0288d1"
                } 30%, ${themeMode === "dark" ? "#b388ff" : "#4fc3f7"} 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: { xs: "80%", sm: "auto" },
                px: { xs: 1.5, sm: 2 },
                py: 0.5,
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "text.primary",
                  WebkitBackgroundClip: "unset",
                  WebkitTextFillColor: "inherit",
                  boxShadow: `0 2px 4px rgba(${
                    themeMode === "dark" ? "123, 63, 228" : "2, 136, 209"
                  }, 0.2)`,
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
              bgcolor: "transparent",
              background: `linear-gradient(45deg, ${
                themeMode === "dark" ? "#7b3fe4" : "#0288d1"
              } 30%, ${themeMode === "dark" ? "#b388ff" : "#4fc3f7"} 90%)`,
              color: "text.primary",
              width: { xs: "80%", sm: "auto" },
              px: { xs: 1.5, sm: 2 },
              py: 0.5,
              borderRadius: "20px",
              animation: "pulseGlow 1.5s infinite",
              "@keyframes pulseGlow": {
                "0%": {
                  boxShadow: `0 0 0 0 rgba(${
                    themeMode === "dark" ? "123, 63, 228" : "2, 136, 209"
                  }, 0.4)`,
                },
                "50%": {
                  boxShadow: `0 0 10px 5px rgba(${
                    themeMode === "dark" ? "123, 63, 228" : "2, 136, 209"
                  }, 0)`,
                },
                "100%": {
                  boxShadow: `0 0 0 0 rgba(${
                    themeMode === "dark" ? "123, 63, 228" : "2, 136, 209"
                  }, 0.4)`,
                },
              },
              "&:hover": {
                bgcolor: "primary.light",
                color: "text.primary",
                boxShadow: `0 2px 4px rgba(${
                  themeMode === "dark" ? "123, 63, 228" : "2, 136, 209"
                }, 0.2)`,
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
            color: "text.secondary",
            background: `linear-gradient(45deg, ${
              themeMode === "dark" ? "#7b3fe4" : "#0288d1"
            } 30%, ${themeMode === "dark" ? "#b388ff" : "#4fc3f7"} 90%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          © {year} Kusal Madura Yapa. All rights reserved.
        </Typography>
      </Box>
    );
  }
  