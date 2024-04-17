import styled from 'styled-components';

export const StyledArticleCta = styled.div<{ $isOver: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  transform: ${({ $isOver }) =>
    $isOver ? 'translateY(0)' : 'translateY(300%)'};
  transition: transform 200ms ease;

  span {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 600;
  }
`;
