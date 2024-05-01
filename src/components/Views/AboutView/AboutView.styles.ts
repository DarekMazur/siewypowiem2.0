import styled from 'styled-components';

export const AboutViewWrapper = styled.section`
  display: flex;
  gap: 2rem;
`;

export const AboutImage = styled.div`
  position: relative;
  min-width: 20rem;
  height: 30rem;

  img {
    object-fit: cover;
  }
`;

export const AboutLinkSection = styled.div`
  display: flex;
  justify-content: space-evenly;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 1rem 0;
    }
  }
`;

export const AboutContactSection = styled.aside`
  min-width: 30rem;

  div {
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    padding: 2rem 0 0;
  }
`;
