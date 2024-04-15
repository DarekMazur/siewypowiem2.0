import styled from 'styled-components';

export const StyledNavigation = styled.nav<{ $isFooter?: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${({ $isFooter }) => ($isFooter ? '80%' : '100%')};
  padding: 1rem 2rem;
  border-bottom: ${({ theme, $isFooter }) =>
    $isFooter ? '0' : `0.1rem solid ${theme.colors.orange}`};
  background-color: ${({ theme, $isFooter }) =>
    $isFooter ? 'transparent' : theme.colors.transparentGrey};
  z-index: 1;
`;
