import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.orange}`};
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  z-index: 1;

  ul {
    li {
      margin: 0 4rem 0 0;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`;
