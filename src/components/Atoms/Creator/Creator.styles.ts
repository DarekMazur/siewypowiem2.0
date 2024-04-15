import styled from 'styled-components';

export const StyledCreator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-family: ${({ theme }) => theme.fonts.mono};

    a {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
