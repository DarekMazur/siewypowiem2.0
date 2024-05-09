import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const StyledNavigation = styled.nav<{
  $isFooter?: boolean;
  $isOpen?: boolean;
}>`
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

  @media (max-width: ${mainTheme.breakpoints.wide}px) {
    display: ${({ $isFooter }) => ($isFooter ? 'none' : 'flex')};
  }

  @media (max-width: ${mainTheme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    z-index: 2;
  }
`;
