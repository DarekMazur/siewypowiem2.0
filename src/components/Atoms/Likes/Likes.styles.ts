import styled from 'styled-components';

export const StyledLikes = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
