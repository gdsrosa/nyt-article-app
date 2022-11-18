import { ChangeEvent } from 'react';
import { StyledInput } from './styles';

type SearchBarProps = {
  input: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
};

export default function SearchBar({
  input,
  handleChange,
  name,
  placeholder,
}: SearchBarProps) {
  return (
    <StyledInput
      type="search"
      name={name}
      defaultValue={input}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
