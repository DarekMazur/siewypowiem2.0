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
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 110%;
    height: 0.2rem;
    background: ${({ $color, theme }) =>
      $color ? theme.colors[$color] : theme.colors.black};
    left: -5%;
    bottom: -0.3rem;
    transition: transform 200ms ease-in-out;
    transform-origin: 0 0;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
