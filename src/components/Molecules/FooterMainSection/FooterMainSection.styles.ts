import styled from 'styled-components';

export const StyledFooterMainSection = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `0.2rem solid ${theme.colors.orange}`};
  padding: 0 4rem;
`;
