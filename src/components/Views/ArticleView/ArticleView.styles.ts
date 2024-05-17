import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';
import '@fortawesome/free-solid-svg-icons';

export const SingleArticleWrapper = styled.section<{ $withAside: boolean }>`
  display: flex;
  gap: 2rem;

  div {
    width: ${({ $withAside }) => ($withAside ? '75%' : '100%')};

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme }) => theme.colors.orange};
    }

    h4,
    h5,
    h6 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    p {
      line-height: 2;
    }

    a {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        height: 0.2rem;
        width: 100%;
        bottom: 0;
        left: 0;
        transform-origin: 0 0;
        transition: transform 200ms ease;
        transform: scaleX(0);
        background-color: ${({ theme }) => theme.colors.blue};
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }

    ul {
      list-style: none;
      padding: 0 0 0 2rem;

      li {
        position: relative;
        left: 1rem;

        &::before {
          content: '';
          position: absolute;
          display: inline-block;
          height: 0.1rem;
          width: 0.6rem;
          background-color: ${({ theme }) => theme.colors.orange};
          top: 50%;
          left: -1rem;
        }
      }
    }

    img {
      position: relative;
      max-width: 100%;
      max-height: 50rem;
      left: 50%;
      transform: translateX(-50%);
    }

    blockquote {
      font-style: italic;
      margin-inline: auto;
      padding: 2rem;
      color: ${({ theme }) => theme.colors.black};
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.white};
      display: grid;
      gap: 1rem;
      border-radius: 1rem;
      box-shadow: 0.5rem 0.5rem 2rem rgb(0 0 0 / 0.5);

      &::before {
        content: '';
        margin-left: calc(2rem * -1);
        margin-top: calc(2rem * -1);
        height: 4rem;
        width: calc(4rem * 1.1);
        background-image: ${({ theme }) => `radial-gradient(
          circle at bottom right,
          transparent calc(4rem / 4 - 0.1rem),
          ${theme.colors.orange} calc(4rem / 4) calc(4rem / 2), 
          transparent calc(4rem / 2 + 0.1rem)
        ), linear-gradient(${theme.colors.orange}, ${theme.colors.orange})`};
        background-size: calc(4rem / 2) calc(4rem / 2);
        background-position:
          top left,
          bottom left;
        background-repeat: space no-repeat;
        opacity: 0.7;
      }
    }
  }

  aside {
    width: 25%;

    img {
      transform: translateX(0);
    }
  }

  @media (max-width: ${mainTheme.breakpoints.desktop}px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

export const ArticlesNavigationWrapper = styled.section<{
  $isOnlyNext: boolean;
}>`
  width: 100%;
  margin: 5rem 0 3rem;
  display: flex;
  justify-content: ${({ $isOnlyNext }) =>
    $isOnlyNext ? 'flex-end' : `space-between`};

  button {
    padding: 0 2rem;
    height: 6rem;
    border: ${({ theme }) => `solid ${theme.colors.black} 0.1rem`};
    background-color: transparent;
    overflow: hidden;

    &:hover {
      span {
        transform: translateY(-100%);
      }
    }

    span {
      display: block;
      padding: 0;
      margin: 0;
      height: 6rem;
      line-height: 6rem;
      transition: transform 200ms ease-in-out;
      font-weight: 600;

      &:last-of-type {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;
