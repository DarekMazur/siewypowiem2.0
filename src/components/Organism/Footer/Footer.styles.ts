import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
