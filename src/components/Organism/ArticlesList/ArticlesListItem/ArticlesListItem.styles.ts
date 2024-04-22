import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import styled from 'styled-components';

export const ArticleContentWrapper = styled.div<{
  $isHidden?: boolean;
}>`
  display: flex;
  width: calc(100% - 2rem);
  height: 20rem;
  flex-direction: column;
  z-index: 0;
  bottom: 0;
  left: 1rem;
  position: absolute;
  padding: 1rem;
  overflow: hidden;
  backdrop-filter: blur(0.4rem);

  div:first-of-type {
    transition: transform 200ms ease-in-out;
    transform: ${({ $isHidden }) =>
      $isHidden ? 'translateY(-100%)' : 'translateY(0)'};
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20rem;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: -1;
    opacity: 0.7;
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

export const ArticleListItemWrapper = styled.article<{ $height?: number }>`
  position: relative;
  min-height: ${({ $height }) => ($height ? `${height}px` : '70rem')};
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
