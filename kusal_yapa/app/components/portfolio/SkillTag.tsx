import { Chip } from '@mui/material';

interface SkillTagProps {
  label: string;
}

export const SkillTag = ({ label }: SkillTagProps) => {
  return <Chip label={label} color="primary" variant="outlined" sx={{ m: 0.5 }} />;
};

export default SkillTag;
