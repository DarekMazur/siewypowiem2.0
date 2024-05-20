import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const StyledHeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: 1.5;
  position: relative;
  margin: 0 0 1.5rem;

  @media (max-width: ${mainTheme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
