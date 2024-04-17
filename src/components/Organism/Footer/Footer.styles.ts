import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: ${({ theme }) => `0.4rem solid ${theme.colors.orange}`};
`;
