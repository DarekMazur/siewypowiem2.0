import styled from 'styled-components';

export const ArticleListItemWrapper = styled.article`
  position: relative;
  overflow: hidden;

  & > div {
    border: 1px solid red;
    padding: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    z-index: 1;
    top: 1rem;
    left: 1rem;
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: opacity 200ms ease-in-out;
    opacity: 0.7;
    z-index: 0;
  }

  &:hover::after {
    opacity: 0.9;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
