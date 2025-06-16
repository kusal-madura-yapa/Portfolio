import { Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SkillTagProps } from '../../types';
import { buttonHoverEffect } from '../../styles/commonStyles';

export function SkillTag({ label, sx }: SkillTagProps) {
  const theme = useTheme();
  
  return (
    <Chip
      component="div"
      label={label}
      sx={{
        fontSize: '0.9rem',
        fontWeight: 500,
        borderRadius: '16px',
        backgroundColor: 'primary.main',
        color: 'text.primary',
        px: { xs: 1.5, sm: 2 },
        py: 0.5,
        ...buttonHoverEffect(theme),
        ...sx,
      }}
    />
  );
}