"use client";
import { Box, Typography } from "@mui/material";
import { ProjectCard } from "../portfolio/ProjectCard"; // adjust the path as necessary

export default function EducationSection() {
  return (
    <Box id="education" sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 4,
          textAlign: "center",
          background: 'linear-gradient(45deg, #7b3fe4 30%, #ce93d8 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Education
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: { xs: 2, md: 3 },
        }}
      >
        <ProjectCard
          title="University of Westminster - BEng (Hons) Software Engineering"
          description={`2021 - 2025
            Final Year:
            - Mobile Native Application Development
            - Formal Methods
            - Concurrent Programming (Java)
            - Computer Science Final Project
            - Cyber Security

            3rd Year:
            - Industrial Placement at 99X Technology Limited

            2nd Year:
            - Average Marks - 71.6%

            1st Year:
            - Average Marks - 85.1%`}
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: "1 1 300px",
            minWidth: "280px",
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '8px',
          }}
        />
        <ProjectCard
          title="Diploma in Information Technology"
          description="Completed coursework in IT fundamentals, programming, and database systems."
          date="ESOFT Metro Campus (2020-2021)"
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: "1 1 300px",
            minWidth: "280px",
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '8px',
          }}
        />
        <ProjectCard
          title="Advanced Levels (Biology, Chemistry, Physics)"
          description="Studied advanced science subjects, developing analytical and problem-solving skills."
          date="Richmond College (2006-2019)"
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: "1 1 300px",
            minWidth: "280px",
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
}