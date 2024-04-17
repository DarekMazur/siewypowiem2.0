import styled from 'styled-components';

export const StyledArticleList = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  max-width: 950px;
`;
