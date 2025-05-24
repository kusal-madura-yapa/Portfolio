'use client';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Box, SxProps, Theme } from '@mui/system';

interface ProjectCardProps {
  title?: string;
  description?: string;
  date?: string;
  sx?: SxProps<Theme>;
}

export function ProjectCard({ title, description, date, sx }: ProjectCardProps) {
  const processDescription = (desc?: string) => {
    if (!desc || typeof desc !== 'string') return [{ header: '', items: [desc || ''] }];
    const lines = desc.split('\n').filter(line => line.trim());
    const sections = [];
    let currentSection: { header: string; items: string[] } = { header: '', items: [] };

    lines.forEach(line => {
      if (line.startsWith('- ') || line.match(/^\d+(st|nd|rd|th)?/)) {
        if (currentSection.header && currentSection.items.length > 0) {
          sections.push(currentSection);
        }
        currentSection = { header: line.replace('- ', '').trim(), items: [] };
      } else if (currentSection.header) {
        currentSection.items.push(line.trim());
      }
    });

    if (currentSection.header || currentSection.items.length > 0) {
      sections.push(currentSection);
    }

    return sections.length > 0 ? sections : [{ header: '', items: [desc] }];
  };

  const sections = processDescription(description);

  return (
    <Card
      sx={{
        p: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
        },
        ...sx,
      }}
    >
      <CardContent>
        {title && (
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        )}
        {sections.length > 0 && (
          <Box>
            {sections.map((section, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {section.header}
                </Typography>
                <List sx={{ pl: 2, color: 'text.secondary' }}>
                  {section.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex} disablePadding sx={{ display: 'list-item', mb: 0.5 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
        )}
        {date && (
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}