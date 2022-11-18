import { MouseEvent } from 'react';
import { StyledButton } from './styles';

export type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
