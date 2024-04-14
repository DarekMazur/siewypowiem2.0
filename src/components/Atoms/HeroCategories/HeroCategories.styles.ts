import styled from 'styled-components';

export const StyledHeroCategories = styled.p`
  padding: 2rem 0;
  font-family: ${({ theme }) => theme.fonts.alt};
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;

  img {
    position: relative;
    bottom: -7px;
  }
`;
