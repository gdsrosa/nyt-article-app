import { MouseEvent } from 'react';

type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, type, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
}
