import styled, { keyframes } from 'styled-components';

const iconSlideIn = keyframes`
  to {
    transform: translateX(0);
  }
`;

const slidePartUp = keyframes`
  to {
    transform: translateY(-102%)
  }
`;

const slidePartDown = keyframes`
  to {
    transform: translateY(100%)
  }
`;

const slideTextUp = keyframes`
  to {
    transform: translateX(-50%) translateY(0)
  }
`;

const slideTextDown = keyframes`
  to {
    transform: translateX(50%) translateY(0)
  }
`;

export const StyledIntro = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-family: ${({ theme }) => theme.fonts.intro};
  color: ${({ theme }) => theme.colors.orange};
  line-height: 11.5rem;
  z-index: 999;

  div {
    height: 50vh;
    width: 100vw;
    display: flex;
    background-color: ${({ theme }) => theme.colors.grey};
    justify-content: center;
    overflow: hidden;
    transition: transform 600ms ease-in-out;

    img {
      position: absolute;
      height: 15rem;
      width: 15rem;
      bottom: 0.2rem;
      left: -15rem;
      transform: translateX(calc(100vw + 15rem));
      animation: 800ms linear 1500ms forwards ${iconSlideIn};
    }

    span {
      z-index: 2;
      transition: transform 600ms ease-in-out;
    }

    &:nth-of-type(odd) {
      animation: 500ms linear 2400ms forwards ${slidePartUp};

      span {
        align-self: flex-end;
        transform: translateX(-50%) translateY(120%);
        animation: 600ms linear 300ms forwards ${slideTextUp};
      }

      &::after {
        content: '';
        position: absolute;
        transform-origin: 0 100%;
        top: calc(100% - 0.2rem);
        left: -14rem;
        width: calc(100vw + 14rem);
        height: 0.2rem;
        background-color: ${({ theme }) => theme.colors.orange};
        transform: translateX(calc(100vw + 14rem));
        animation: 800ms linear 1500ms forwards ${iconSlideIn};
      }
    }

    &:nth-of-type(even) {
      animation: 500ms linear 2400ms forwards ${slidePartDown};
      text-align: right;
      span {
        transform: translateX(50%) translateY(-120%);
        animation: 600ms linear 300ms forwards ${slideTextDown};
      }

      &::after {
        content: '';
        position: absolute;
        transform-origin: 100% 0;
        bottom: calc(100% - 0.2rem);
        left: -14rem;
        width: calc(100vw + 14rem);
        height: 0.2rem;
        background-color: ${({ theme }) => theme.colors.orange};
        transform: translateX(calc(100vw + 14rem));
        animation: 800ms linear 1500ms forwards ${iconSlideIn};
      }
    }
  }
`;
