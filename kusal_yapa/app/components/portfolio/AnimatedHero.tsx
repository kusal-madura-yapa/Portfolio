"use client";
import { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";

export default function AnimatedHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, sm: 8, md: 10 }, // Increased padding for more height
        mb: { xs: 4, md: 5 }, // Increased margin
        position: "relative",
        width: "100%", // Full width
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "300px", sm: "400px", md: "500px" }, // Taller container
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
          background: "linear-gradient(135deg, rgba(123, 63, 228, 0.3), rgba(206, 147, 216, 0.3))", // Subtle purple overlay
        }}
      />
      <Avatar
        src="profile.png"
        alt="Kusal Madura Yapa"
        sx={{
          width: { xs: 80, sm: 90, md: 100 }, // Smaller avatar
          height: { xs: 80, sm: 90, md: 100 },
          mb: 2, // Tighter spacing
          border: "3px solid #bb86fc", // Thinner border, theme's primary.light
          boxShadow: "0 2px 4px rgba(98, 0, 234, 0.3)", // Subtler purple shadow
          zIndex: 2,
          ...(isMounted && {
            animation: "float 4s ease-in-out infinite", // Slower, smoother float
            "@keyframes float": {
              "0%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-4px)" }, // Minimal float
              "100%": { transform: "translateY(0)" },
            },
          }),
        }}
      />
      <Typography
        variant="h2"
        sx={{
          color: "text.primary", // White for readability
          zIndex: 2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Smaller, responsive
          fontWeight: "bold",
          position: "relative",
          pb: 1, // Space for underline
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "50%",
            height: "3px",
            background: "linear-gradient(45deg, #7b3fe4 30%, #ce93d8 90%)", // Purple underline
          },
          ...(isMounted && {
            animation: "fadeInUp 0.8s ease-out", // Faster, subtler fade
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(10px)" }, // Minimal translate
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }),
        }}
      >
        Kusal Madura Yapa
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: { xs: "90%", sm: "600px" }, // Tighter max-width
          px: { xs: 2, sm: 3 },
          color: "text.secondary", // #b0b0b0 for contrast
          zIndex: 2,
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Smaller, readable
          ...(isMounted && {
            animation: "fadeInUp 1s ease-out 0.2s backwards", // Slightly faster
          }),
        }}
      >
        Software Engineering undergraduate | Innovator in AI & Full-Stack Development
      </Typography>
    </Box>
  );
}