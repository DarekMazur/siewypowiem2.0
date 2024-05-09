import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const StyledNavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 3rem;

  @media (max-width: ${mainTheme.breakpoints.mobile}px) {
    flex-direction: column;
    max-height: unset;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
