import styled from 'styled-components';

export const StyledBlogLink = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  height: 4rem;
  overflow-y: hidden;

  &:hover {
    a {
      span {
        transform: translateY(-100%);
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.l};
    text-decoration: none;
    position: relative;
  }

  span {
    display: block;
    text-align: center;
    transition: transform 200ms ease-in-out;
    padding: 1rem 0;

    &:first-of-type {
      transform: translateY(0);
    }

    &:nth-last-of-type() {
      transform: translateY(100%);
    }
  }
`;
