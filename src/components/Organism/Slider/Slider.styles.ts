import mainTheme from '@/utils/styles/theme';
import styled from 'styled-components';
import Image from 'next/image';

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 2rem 0 7rem;

  & > div {
    & div {
      width: calc(100% - 12rem);
      transform: translateX(6rem);

      @media (max-width: ${mainTheme.breakpoints.desktop}px) {
        width: calc(100% - 2rem);
        transform: translateX(1rem);
      }
    }
  }

  & > a {
    font-size: 22px;
    line-height: 0;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s linear;
    z-index: 1;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px;
    text-decoration: none;
    backface-visibility: hidden;
    z-index: 2;

    &:first-of-type {
      left: 20px;
    }

    &:last-of-type {
      right: 20px;
    }

    &:not(.disabled):hover {
      transform: translateY(-50%) scale(1.25);
      cursor: pointer;
    }
  }
`;

export const SlideWrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(0.4rem);

  * {
    width: 80%;
    z-index: 1;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.orange};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  &::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.45;
    border-radius: 2rem;
    z-index: 0;
  }
`;

export const SliderButton = styled.button`
  width: 15rem;
  height: auto;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.button};
`;

export const SliderImage = styled(Image)`
  object-fit: cover;
`;

export const SliderNavigationButton = styled.button<{ $isLeft?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ $isLeft }) => ($isLeft ? '1rem' : 'unset')};
  right: ${({ $isLeft }) => ($isLeft ? 'unset' : '1rem')};
  z-index: 2;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.orange};
  transition: transform 100ms ease-in-out;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: translateY(-50%) scale(1.2);
  }
`;
