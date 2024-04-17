import styled from 'styled-components';

export const StyledCreator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  p {
    font-family: ${({ theme }) => theme.fonts.mono};
    padding: 0 0.5rem;

    a {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
