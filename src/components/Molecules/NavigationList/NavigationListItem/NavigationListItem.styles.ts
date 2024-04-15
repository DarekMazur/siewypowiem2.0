import styled from 'styled-components';

interface IStyledNavigationListItem {
  $isCurrent?: boolean;
}

export const StyledNavigationListItem = styled.li<IStyledNavigationListItem>`
  margin: 0 4rem 0 0;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    display: block;
    height: 0.2rem;
    width: 110%;
    transform: ${({ $isCurrent }) =>
      $isCurrent ? `scaleX(1) translateX(-5%)` : `scaleX(0) translateX(-5%)`};
    background-color: ${({ theme }) => theme.colors.blue};
    transform-origin: 0 0;
    transition: transform 200ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1) translateX(-5%);
  }

  &:last-of-type {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
  }
`;
