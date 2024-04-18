import styled from 'styled-components';

export const FilterWrapper = styled.aside<{
  $isVisible: boolean;
  $isSidebarHidden: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  opacity: ${({ $isSidebarHidden }) => ($isSidebarHidden ? '0' : '1')};
  transition:
    transform 200ms 100ms ease-in-out,
    opacity 200ms ease-in-out;
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(0)' : 'translateX(-20rem)'};
`;

export const FilterOptions = styled.div`
  width: 20rem;
  padding: 6rem 1rem 0;
  margin: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`;

export const FilterListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;
