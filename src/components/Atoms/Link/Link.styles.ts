import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{
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
  text-decoration: none;
  color: ${({ $color, theme }) => ($color ? theme.colors[$color] : 'inherit')};
`;
