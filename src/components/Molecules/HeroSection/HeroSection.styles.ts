import styled from 'styled-components';

interface IHeroStyleProps {
  $sectionHeight: number;
}

export const StyledHeroSection = styled.section<IHeroStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ $sectionHeight }) => `${$sectionHeight}px`};
  z-index: 1;

  p {
    margin: 0;
  }

  svg {
    position: absolute;
    bottom: 4rem;
    transition: transform 100ms ease-in-out;
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fontSize.xl};

    &:hover {
      transform: scale(1.3);
    }
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    background: linear-gradient(
      180deg,
      rgba(252, 252, 255, 0) 50%,
      rgba(252, 252, 255, 1) 95%,
      rgba(252, 252, 255, 1) 100%
    );
    z-index: -1;
  }
`;
