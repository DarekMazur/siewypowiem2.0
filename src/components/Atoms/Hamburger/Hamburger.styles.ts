import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';

export const HamburgerWrapper = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.orange}`};
  z-index: 1;

  span {
    border-radius: 0.2rem;
    position: absolute;
    width: 4rem;
    height: 0.4rem;
    background-color: black;
    transform-origin: 50% 50%;
    transition: transform 100ms ease-in-out;
    right: 3rem;

    &:first-of-type {
      top: 2rem;
      transform: ${({ $isOpen }) =>
        $isOpen
          ? 'translateY(1.8rem) rotate(45deg)'
          : 'translateY(0) rotate(0)'};
    }

    &:last-of-type {
      bottom: 2rem;
      transform: ${({ $isOpen }) =>
        $isOpen
          ? 'translateY(-1.8rem) rotate(-45deg)'
          : 'translateY(0) rotate(0)'};
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      display: ${({ $isOpen }) => ($isOpen ? 'none' : 'block')};
    }
  }

  @media (min-width: ${mainTheme.breakpoints.mobile}px) {
    display: none;
  }
`;
