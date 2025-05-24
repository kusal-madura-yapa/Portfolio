"use client";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Container,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ProjectCard } from "./components/portfolio/ProjectCard";
import { SkillTag } from "./components/portfolio/SkillTag";
import dynamic from 'next/dynamic';

const AnimatedHero = dynamic(() => import('./components/portfolio/AnimatedHero'), {
  ssr: false,
});

// ... (ProjectCard and SkillTag components remain unchanged)

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true only on client-side mount
  }, []);

  return (
    <Container
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "1600px",
      }}
    >
      {/* Hero Section */}
      <AnimatedHero />


      {/* About Me */}
      <Box
        id="about-me"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          About Me
        </Typography>
        <ProjectCard
          description="I am a driven Software Engineering undergraduate at the University of Westminster, with expertise in full-stack development, reinforcement learning, and AI solutions. I spearheaded an adaptive gamification platform using Deep Q-Networks (DQN) and contributed to the award-winning OPTIMAXER AI project (NBQSA Merit Award 2023). I thrive in agile environments, showcasing leadership and technical proficiency across diverse technologies."
          sx={{
            p: { xs: 3, md: 4 },
            maxWidth: { xs: "100%", sm: "900px" },
            mx: "auto",
          }}
        />
      </Box>

      {/* Skills */}
      <Box id="skills" sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            justifyContent: "center",
            mb: 4,
            maxWidth: { xs: "100%", sm: "1000px" },
            mx: "auto",
          }}
        >
          {[
            "OOP",
            "Mobile App Dev",
            "Web Dev",
            "AI Integration",
            "Agile",
            "Version Control",
            "Time Management",
            "Teamwork",
            "Learning Ability",
            "Problem Solving",
            "Leadership",
            "Java",
            "Python",
            "Swift",
            "JavaScript",
            "Next.js",
            "Nest.js",
            "Flask",
            "iOS (SwiftUI)",
            "Android",
            "AWS",
            "Azure",
            "Figma",
            "GitHub",
          ].map((skill) => (
            <SkillTag
              key={skill}
              label={skill}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                px: { xs: 2, sm: 2.5 },
                py: 1,
                borderRadius: "20px",
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box
        id="education"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Education
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              description="University of Westminster - BEng (Hons) Software Engineering 2021 - 2025\nFinal Year\n- Mobile Native Application Development\n- Formal Methods\n- Concurrent Programming (Java)\n- Computer Science Final Project\n- Cyber Security\n3rd Year - Industrial Placement with 99X Technology Limited\n2nd Year - Average Marks - 71.6%\n1st Year - Average Marks - 85.1%"
              sx={{ p: { xs: 3, md: 4 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Diploma in Information Technology"
              description=""
              date="ESOFT Metro Campus (2020-2021)"
              sx={{ p: { xs: 3, md: 4 } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard
              title="Advanced Levels (Biology, Chemistry, Physics)"
              description=""
              date="Richmond College (2006-2019)"
              sx={{ p: { xs: 3, md: 4 } }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Experience */}
      <Box
        id="experience"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Professional Experience
        </Typography>
        <ProjectCard
          title="Trainee Software Engineer"
          description="99X Technology Limited, Colombo, Sri Lanka (Jul 2023 - Jul 2024)\n- Optimized AI prompts for enhanced system accuracy.\n- Served as Scrum Master, facilitating agile processes.\n- Contributed to OPTIMAXER AI (NBQSA Merit 2023).\n- Developed: Employee Upskilling App, AI Web Solutions, HR Bot, AI Research Hub."
          sx={{
            p: { xs: 3, md: 4 },
            maxWidth: { xs: "100%", sm: "900px" },
            mx: "auto",
          }}
        />
      </Box>

      {/* Projects */}
      <Box
        id="projects"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Key Projects
        </Typography>
        <ProjectCard
          title="Adaptive Gamification Model"
          description="Final Year Project (2024-2025)\n- Implemented a DQN-based gamification system to personalize programming education\n- Featured dynamic difficulty adjustment, feedback, and leaderboards to boost engagement and retention for Gen Z learners."
          sx={{
            p: { xs: 3, md: 4 },
            maxWidth: { xs: "100%", sm: "900px" },
            mx: "auto",
          }}
        />
      </Box>

      {/* Achievements */}
      <Box
        id="achievements"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Achievements
        </Typography>
        <ProjectCard
          description="2023\n- NBQSA Merit for OPTIMAXER AI\n2021-2022\n- 1st Runner Up, OpenHack 2.0\n- Finalist, RevolUX 2.0\n- IEEEXtreme 16.0\n- Hacktoberfest 2022"
          sx={{
            p: { xs: 3, md: 4 },
            maxWidth: { xs: "100%", sm: "900px" },
            mx: "auto",
          }}
        />
      </Box>

      {/* Volunteer Work */}
      <Box
        id="volunteer-work"
        sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: "120px" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4, textAlign: "center" }}
        >
          Volunteer Work
        </Typography>
        <ProjectCard
          description="2023-2024\n- Music Innovative Member, Xternship Program Volunteer (IIT)\n2022-2023\n- STEM UP Foundation Supporter"
          sx={{
            p: { xs: 3, md: 4 },
            maxWidth: { xs: "100%", sm: "900px" },
            mx: "auto",
          }}
        />
      </Box>

      {/* Contact */}
      <Box
        id="contact"
        sx={{
          textAlign: "center",
          mb: { xs: 4, md: 6 },
          scrollMarginTop: "120px",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "text.primary", mb: 4 }}
        >
          Contact Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", sm: "center" },
            gap: { xs: 1.5, sm: 3 },
            flexWrap: "wrap",
            maxWidth: { xs: "100%", sm: "1000px" },
            mx: "auto",
          }}
        >
          <Button
            startIcon={<Email />}
            href="mailto:kusalmadurayapa@gmail.com"
            aria-label="Email Kusal"
            sx={{
              bgcolor: "transparent",
              color: "text.primary",
              width: { xs: "80%", sm: "auto" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
              animation: "fadeInScale 0.7s ease-out",
              "@keyframes fadeInScale": {
                from: { transform: "scale(0.95)", opacity: 0 },
                to: { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            kusalmadurayapa@gmail.com
          </Button>
          <Button
            startIcon={<Phone />}
            href="tel:+94771196802"
            aria-label="Call Kusal"
            sx={{
              bgcolor: "transparent",
              color: "text.primary",
              width: { xs: "80%", sm: "auto" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
              animation: "fadeInScale 0.7s ease-out",
              "@keyframes fadeInScale": {
                from: { transform: "scale(0.95)", opacity: 0 },
                to: { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            +94 771 196 802
          </Button>
          <Button
            startIcon={<LinkedIn />}
            href="http://bit.ly/3KEuNjX"
            target="_blank"
            aria-label="LinkedIn Profile"
            sx={{
              bgcolor: "transparent",
              color: "text.primary",
              width: { xs: "80%", sm: "auto" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
              animation: "fadeInScale 0.7s ease-out",
              "@keyframes fadeInScale": {
                from: { transform: "scale(0.95)", opacity: 0 },
                to: { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            LinkedIn
          </Button>
          <Button
            startIcon={<GitHub />}
            href="https://github.com/Kusal-madura-yapa"
            target="_blank"
            aria-label="GitHub Profile"
            sx={{
              bgcolor: "transparent",
              color: "text.primary",
              width: { xs: "80%", sm: "auto" },
              "&:hover": { bgcolor: "primary.main", color: "white" },
              animation: "fadeInScale 0.7s ease-out",
              "@keyframes fadeInScale": {
                from: { transform: "scale(0.95)", opacity: 0 },
                to: { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            href="/Kusal_Yapa_CV.pdf"
            download
            aria-label="Download CV"
            sx={{
              mt: { xs: 1, sm: 0 },
              bgcolor: "primary.main",
              color: "white",
              width: { xs: "80%", sm: "auto" },
              animation: "pulseGlow 1.5s infinite",
              "@keyframes pulseGlow": {
                "0%": { boxShadow: "0 0 0 0 rgba(25, 118, 210, 0.4)" },
                "50%": { boxShadow: "0 0 20px 10px rgba(25, 118, 210, 0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(25, 118, 210, 0.4)" },
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
