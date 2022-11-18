import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: circle left;
  padding: 0;

  li {
    padding: 10px 10px;
    background-color: #eee;
    border: 1px solid #ddd;

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

export const SubTitle = styled.h3`
  margin: 10px 0;
`;
