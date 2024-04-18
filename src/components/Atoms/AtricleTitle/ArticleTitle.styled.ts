import styled from 'styled-components';

export const StyledArticleTitle = styled.h3<{ $size?: number }>`
  padding: 0;
  display: inline;
  font-size: ${({ $size }) => ($size ? `${$size}px` : null)};
`;
