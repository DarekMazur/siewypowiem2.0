import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const StyledArticleTitle = styled.h3<{ $size?: number }>`
  padding: 0;
  display: inline;
  font-size: ${({ $size }) => ($size ? `${$size}px` : null)};

  @media (max-width: ${mainTheme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
