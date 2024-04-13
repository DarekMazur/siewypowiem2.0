import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.orange}`};
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  z-index: 1;

  p {
    font-family: ${({ theme }) => theme.fonts.hand};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
