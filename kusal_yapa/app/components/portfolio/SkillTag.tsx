import { Chip } from '@mui/material';

interface SkillTagProps {
  label: string;
  sx?: object;
}

export function SkillTag({ label, sx }: SkillTagProps) {
  return (
    <Chip
      label={label}
      sx={{
        fontSize: '0.9rem',
        fontWeight: 500,
        ...sx,
      }}
    />
  );
}