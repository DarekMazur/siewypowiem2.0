import styled from 'styled-components';
import hero from '../../assets/hero.jpg';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${hero.src}) 10% / cover no-repeat;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
    z-index: 0;
  }
`;
