import styled from 'styled-components';

export const ArchiveWrapper = styled.section`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 10rem;
      gap: 2rem;
    }
  }
`;
