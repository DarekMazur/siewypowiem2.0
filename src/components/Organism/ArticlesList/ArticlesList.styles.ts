import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const ArticlesWrapper = styled.div`
  width: 100%;
`;

export const StyledArticleList = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(55rem, 1fr));
  width: 100%;

  @media (max-width: ${mainTheme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;
