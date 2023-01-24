/// <reference types="react" />
import { ButtonProps as MuiButtonProps } from '@mui/material';
declare type ButtonBaseProps = Omit<MuiButtonProps, 'disableRipple'>;
export interface ButtonProps extends ButtonBaseProps {
    label: string;
}
declare const Button: ({ label, ...rest }: ButtonProps) => JSX.Element;
export default Button;
