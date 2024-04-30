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
`;
