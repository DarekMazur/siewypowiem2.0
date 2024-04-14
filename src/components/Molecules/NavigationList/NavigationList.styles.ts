import styled from 'styled-components';

export const StyledMainNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 4rem 0 0;

    &:last-of-type {
      margin: 0;
    }
  }
`;
