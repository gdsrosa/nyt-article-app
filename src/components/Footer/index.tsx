import { StyledFooter } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>Powered by Grover - {new Date().getFullYear()}</StyledFooter>
  );
}
