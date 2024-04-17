import styled from 'styled-components';

export const SytledCopyrights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 1rem;
  font-family: ${({ theme }) => theme.fonts.serif};
  z-index: 1;
`;
