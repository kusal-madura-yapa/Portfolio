'use client';
import { Typography, Box } from '@mui/material';
import { Button } from './components/common/Button';
import { ProjectCard } from './components/portfolio/ProjectCard';
import { SkillTag } from './components/portfolio/SkillTag';
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6, py: 4, bgcolor: 'grey.100' }}>
        <Typography variant="h1" gutterBottom>
          Kusal Madura Yapa
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Software Engineering Undergraduate | Innovator in AI & Full-Stack Development
        </Typography>
      </Box>

      {/* About Me */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <ProjectCard
          title=""
          description="I am a driven Software Engineering undergraduate at the University of Westminster, with expertise in full-stack development, reinforcement learning, and AI solutions. I spearheaded an adaptive gamification platform using Deep Q-Networks (DQN) and contributed to the award-winning OPTIMAXER AI project (NBQSA Merit Award 2023). I thrive in agile environments, showcasing leadership and technical proficiency across diverse technologies."
          date=""
        />
      </Box>

      {/* Skills */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {[
            'OOP', 'Mobile App Dev', 'Web Dev', 'AI Integration', 'Agile', 'Version Control',
            'Time Management', 'Teamwork', 'Learning Ability', 'Problem Solving', 'Leadership',
            'Java', 'Python', 'Swift', 'JavaScript', 'Next.js', 'Nest.js', 'Flask',
            'iOS (SwiftUI)', 'Android', 'AWS', 'Azure', 'Figma', 'GitHub',
          ].map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Education
        </Typography>
        <ProjectCard
          title="BEng (Hons) Software Engineering"
          description="University of Westminster (2021-2025)\n- Final Year: Mobile Native App Dev, Formal Methods, Concurrent Programming, Final Project, Cyber Security\n- 3rd Year: Industrial Placement at 99X Technology\n- 2nd Year: 71.6% | 1st Year: 85.1%"
          date=""
        />
        <ProjectCard
          title="Diploma in Information Technology"
          description=""
          date="ESOFT Metro Campus (2020-2021)"
        />
        <ProjectCard
          title="Advanced Levels (Biology, Chemistry, Physics)"
          description=""
          date="Richmond College (2006-2019)"
        />
      </Box>

      {/* Experience */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Professional Experience
        </Typography>
        <ProjectCard
          title="Trainee Software Engineer"
          description="99X Technology Limited, Colombo, Sri Lanka (Jul 2023 - Jul 2024)\n- Optimized AI prompts for enhanced system accuracy.\n- Served as Scrum Master, facilitating agile processes.\n- Contributed to OPTIMAXER AI (NBQSA Merit 2023).\n- Developed: Employee Upskilling App, AI Web Solutions, HR Bot, AI Research Hub."
          date=""
        />
      </Box>

      {/* Projects */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Key Projects
        </Typography>
        <ProjectCard
          title="Adaptive Gamification Model"
          description="Final Year Project (2024-2025)\nImplemented a DQN-based gamification system to personalize programming education, featuring dynamic difficulty adjustment, feedback, and leaderboards to boost engagement and retention for Gen Z learners."
          date=""
        />
      </Box>

      {/* Achievements */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Achievements
        </Typography>
        <ProjectCard
          title=""
          description="2023: NBQSA Merit for OPTIMAXER AI\n2021-2022: 1st Runner Up, OpenHack 2.0; Finalist, RevolUX 2.0; IEEEXtreme 16.0; Hacktoberfest 2022"
          date=""
        />
      </Box>

      {/* Volunteer Work */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Volunteer Work
        </Typography>
        <ProjectCard
          title=""
          description="2023-2024: Music Innovative Member, Xternship Program Volunteer (IIT)\n2022-2023: STEM UP Foundation Supporter"
          date=""
        />
      </Box>

      {/* Contact */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Contact Me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button startIcon={<Email />} href="mailto:kusalmadurayapa@gmail.com" aria-label="Email Kusal">
            kusalmadurayapa@gmail.com
          </Button>
          <Button startIcon={<Phone />} href="tel:+94771196802" aria-label="Call Kusal">
            +94 771 196 802
          </Button>
          <Button startIcon={<LinkedIn />} href="http://bit.ly/3KEuNjX" target="_blank" aria-label="LinkedIn Profile">
            LinkedIn
          </Button>
          <Button startIcon={<GitHub />} href="https://github.com/Kusal-madura-yapa" target="_blank" aria-label="GitHub Profile">
            GitHub
          </Button>
          <Button variant="contained" href="/Kusal_Yapa_CV.pdf" download aria-label="Download CV">
            Download CV
          </Button>
        </Box>
      </Box>
    </>
  );
}