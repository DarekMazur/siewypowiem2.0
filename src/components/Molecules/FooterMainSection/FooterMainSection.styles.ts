import styled from 'styled-components';

export const StyledFooterMainSection = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.black}`};
  padding: 0 4rem;
  z-index: 1;
`;
