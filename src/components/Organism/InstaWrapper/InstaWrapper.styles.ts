import styled from 'styled-components';

export const StyledInstaWrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  gap: 4rem;
  flex-direction: row !important;
  justify-content: space-around;

  a {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  & > div {
    position: relative;
    width: 23rem;
    height: 23rem;
    overflow: hidden;
    border-radius: 6rem;
    border: ${({ theme }) => `solid 1.5rem ${theme.colors.black}`};
    box-shadow: ${({ theme }) =>
      `0.8rem 0.8rem 1.9rem -1.1rem ${theme.colors.black}`};

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  svg {
    font-size: 20rem;
  }

  img {
    height: auto;
    transition: transform 200ms ease-in-out;
    object-fit: cover;
  }
`;
