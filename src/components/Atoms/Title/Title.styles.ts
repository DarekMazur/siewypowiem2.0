import styled from 'styled-components';

export const StyledTitle = styled.h1`
  & + p {
    font-family: ${({ theme }) => theme.fonts.hand};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0;
  }
`;
