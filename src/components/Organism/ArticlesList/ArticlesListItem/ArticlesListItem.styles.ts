import styled from 'styled-components';

export const ArticleContentWrapper = styled.div<{ $isHidden?: boolean }>`
  display: flex;
  width: 100%;
  height: 20rem;
  flex-direction: column;
  z-index: 1;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: white;
  padding: 1rem;
  overflow: hidden;

  div:first-of-type {
    transition: transform 200ms ease-in-out;
    transform: ${({ $isHidden }) =>
      $isHidden ? 'translateY(-100%)' : 'translateY(0)'};
  }
`;

export const ArticleDetails = styled.div<{ $isVisible?: boolean }>`
  width: 100%;
  position: absolute;
  padding: 1rem;
  top: 20rem;
  left: 0;
  transition: transform 200ms ease-in-out;
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateY(-100%)' : 'translateY(0)'};
`;

export const ArticleListItemWrapper = styled.article`
  position: relative;
  min-height: 70rem;
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
