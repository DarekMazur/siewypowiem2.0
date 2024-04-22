import styled from 'styled-components';

export const StyledHeroArticle = styled.div`
  width: 70vw;
  min-height: 50rem;
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.glassBgr};
  box-shadow: ${({ theme }) => `0 0.8rem 3.2rem 0 ${theme.colors.glassShadow}`};
  backdrop-filter: blur(0.4rem);
  border-radius: 1rem;
  box-sizing: content-box;

  a {
    color: unset;
    text-decoration: none;
    padding: 10rem 4rem;
    display: inline-block;
  }

  &:hover {
    backdrop-filter: blur(0.8rem);
  }
`;
