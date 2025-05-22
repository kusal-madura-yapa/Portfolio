import { Button as MuiButton, ButtonProps } from '@mui/material';
import { AnchorHTMLAttributes } from 'react';

type CustomButtonProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = (props: CustomButtonProps) => {
  return <MuiButton {...props} />;
};