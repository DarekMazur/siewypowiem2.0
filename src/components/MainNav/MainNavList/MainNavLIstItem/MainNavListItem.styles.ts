import styled from 'styled-components';

interface IStyledMainNavListItem {
  $isCurrent?: boolean;
}

export const StyledMainNavListItem = styled.li<IStyledMainNavListItem>`
  margin: 0 4rem 0 0;
  padding-bottom: 0.5rem;
  border-bottom: ${({ $isCurrent, theme }) =>
    $isCurrent ? `0.2rem solid ${theme.colors.blue}` : 'none'};

  &:last-of-type {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
  }
`;
