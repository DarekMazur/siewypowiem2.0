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
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0.5rem 0.5rem 2.5rem -1rem rgba(37, 54, 61, 0.8);
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
