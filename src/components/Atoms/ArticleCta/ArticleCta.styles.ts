import styled from 'styled-components';

export const StyledArticleCta = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  span {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 600;
  }
`;
