"use client";
import { Box, Button } from "@mui/material";

const sections = [
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Achievements",
];

export default function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        bgcolor: "background.paper",
        zIndex: 1100,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        py: 2,
        px: { xs: 2, md: 4 },
        animation: "slideInDown 0.5s ease-out",
        "@keyframes slideInDown": {
          from: { transform: "translateY(-100%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        {sections.map((section) => (
          <Button
            key={section}
            href={`#${section.toLowerCase().replace(" ", "-")}`}
            sx={{
              bgcolor: "transparent",
              color: "text.primary",
              background: "linear-gradient(45deg, #7b3fe4 30%, #ce93d8 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "medium",
              px: { xs: 1.5, sm: 2 },
              py: 0.5,
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "primary.main",
                color: "text.primary",
                WebkitBackgroundClip: "unset",
                WebkitTextFillColor: "inherit",
                boxShadow: "0 2px 4px rgba(98, 0, 234, 0.2)",
              },
            }}
          >
            {section}
          </Button>
        ))}
      </Box>
    </Box>
  );
}