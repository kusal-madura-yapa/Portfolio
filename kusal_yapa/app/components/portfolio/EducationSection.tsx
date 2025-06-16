'use client';
import { useTheme } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import { ProjectCard } from '../portfolio/ProjectCard';
import { sectionTitleStyle, flexContainer } from '../../styles/commonStyles';
import { createAnimation, fadeInUp } from '../../styles/animations';
import { SectionProps } from '../../types';

export default function EducationSection({ }: SectionProps) {
  return (
    <Box id="education" sx={{ mb: { xs: 4, md: 6 }, scrollMarginTop: '120px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          ...sectionTitleStyle(useTheme()),
          animation: createAnimation(fadeInUp, '1s'),
        }}
      >
        Education
      </Typography>

      <Box
        sx={{
          ...flexContainer.row,
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
        }}
      >
        <ProjectCard
          title="University of Westminster - BEng (Hons) Software Engineering"
          description={
            "2021 - 2025\n" +
            "Final Year:\n" +
            "- Mobile Native Application Development\n" +
            "- Formal Methods\n" +
            "- Concurrent Programming (Java)\n" +
            "- Computer Science Final Project\n" +
            "- Cyber Security\n" +
            "\n" +
            "3rd Year:\n" +
            "- Industrial Placement at 99X Technology Limited\n" +
            "\n" +
            "2nd Year:\n" +
            "- Average Marks - 71.6%\n" +
            "\n" +
            "1st Year:\n" +
            "- Average Marks - 85.1%"
          }
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: '1 1 300px',
            minWidth: '280px',
            animation: createAnimation(fadeInUp, '1s', 'ease-in-out', '0.1s'),
          }}
        />
        <ProjectCard
          title="Diploma in Information Technology"
          description="Completed coursework in IT fundamentals, programming, and database systems."
          date="ESOFT Metro Campus (2020-2021)"
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: '1 1 300px',
            minWidth: '280px',
            animation: createAnimation(fadeInUp, '1s', 'ease-in-out', '0.2s'),
          }}
        />
        <ProjectCard
          title="Advanced Levels (Biology, Chemistry, Physics)"
          description="Studied advanced science subjects, developing analytical and problem-solving skills."
          date="Richmond College (2006-2019)"
          sx={{
            p: { xs: 2.5, sm: 3.5 },
            flex: '1 1 300px',
            minWidth: '280px',
            animation: createAnimation(fadeInUp, '1s', 'ease-in-out', '0.3s'),
          }}
        />
      </Box>
    </Box>
  );
}