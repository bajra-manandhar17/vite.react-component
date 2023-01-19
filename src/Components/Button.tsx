import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonBaseProps = Pick<
  MuiButtonProps,
  'color' | 'disabled' | 'fullWidth' | 'size' | 'type' | 'variant'
>;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

export default Button;
