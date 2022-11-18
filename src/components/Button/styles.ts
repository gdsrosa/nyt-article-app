import { darken } from "polished";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #567b95;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #567b95;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 12px;

  :hover {
    background-color: ${darken(0.1, "#567b95")};
  }
`;
