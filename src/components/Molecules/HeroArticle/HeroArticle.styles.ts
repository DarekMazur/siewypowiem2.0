import styled from 'styled-components';

export const StyledHeroArticle = styled.div`
  width: 70vw;
  text-align: center;
  padding: 10rem 4rem;
  background-color: ${({ theme }) => theme.colors.glassBgr};
  box-shadow: ${({ theme }) => `0 8px 32px 0 ${theme.colors.glassShadow}`};
  backdrop-filter: blur(0.4rem);
  -webkit-backdrop-filter: blur(0.7rem);
  border-radius: 1rem;

  a {
    color: unset;
    text-decoration: none;
  }

  &:hover {
    backdrop-filter: blur(0.8rem);
  }
`;
