import styled from 'styled-components';

export const Handwritting = styled.p`
  font-family: ${({ theme }) => theme.fonts.hand};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 2;
`;
