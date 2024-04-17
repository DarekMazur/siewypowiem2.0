import styled from 'styled-components';

export const StyledArticleShortHeader = styled.div<{ $isSpace?: boolean }>`
  display: flex;
  justify-content: ${({ $isSpace }) =>
    $isSpace ? 'space-between' : 'flex-end'};
  align-items: center;
`;
