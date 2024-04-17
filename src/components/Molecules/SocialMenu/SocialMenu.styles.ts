import styled from 'styled-components';

export const StyledSocialMenu = styled.div<{
  $color?:
    | 'white'
    | 'grey'
    | 'transparentGrey'
    | 'orange'
    | 'black'
    | 'blue'
    | 'brown'
    | 'red'
    | 'glassBgr'
    | 'glassShadow';
}>`
  display: flex;
  align-items: flex-start;

  ul {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.l};

    a {
      color: ${({ theme, $color }) =>
        $color ? theme.colors[$color] : theme.colors.blue};
    }
  }
`;
