import { Card, CardContent, Typography } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
}

export const ProjectCard = ({ title, description, date }: ProjectCardProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        {title && <Typography variant="h6" gutterBottom>{title}</Typography>}
        {date && <Typography color="text.secondary" gutterBottom>{date}</Typography>}
        {description && (
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;