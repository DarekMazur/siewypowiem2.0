import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import Error from '../Error/Error';

const loadingAnimation = keyframes`
  0% {
    box-shadow: 12px 0px rgba(252, 252, 255, 0), 38px 0px rgba(252, 252, 255, 0.3), 64px 0px rgba(252, 252, 255, 0);
  }
  50% {
    box-shadow: 12px -5px rgba(252, 252, 255, 0.5), 38px -3px rgba(252, 252, 255, 0.5), 64px -2px rgba(252, 252, 255, 0.6);
  }
  100% {
    box-shadow: 12px -8px rgba(252, 252, 255, 0), 38px -5px rgba(252, 252, 255, 0), 64px -5px rgba(252, 252, 255, 0);
  }
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledLoader = styled.div`
  width: 100px;
  height: 80px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  border: ${({ theme }) => `4px solid ${theme.colors.black}`};
  border-radius: 10% 10% 35% 35%;

  span {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: 80%;
    background-color: ${({ theme }) => theme.colors.brown};
    border-radius: 0 0 35% 35%;
    z-index: -1;
  }

  p {
    position: relative;
    bottom: -100px;
    width: 200px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    left: 50%;
    transform: translateX(-50%);

    span {
      background-color: ${({ theme }) => theme.colors.black};
      width: 3px;
      height: 3px;
      bottom: 2.5px;
      border-radius: 50%;
      display: inline-block;
      transform: translateX(3px);
      animation: ${blink} 0.7s 1s ease infinite;

      &:nth-of-type(2) {
        transform: translateX(8px);
        animation: ${blink} 0.7s 0.5s ease infinite;
      }

      &:nth-of-type(3) {
        transform: translateX(13px);
        animation: ${blink} 0.7s ease infinite;
      }
    }
  }

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 100px;
    top: 35px;
    border: ${({ theme }) => `4px solid ${theme.colors.black}`};
    width: 20px;
    height: 35px;
    border-radius: 0 8px 8px 0;
    transform: translateY(-50%);
  }
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 35px;
    color: ${({ theme }) => theme.colors.white};
    top: -40px;
    left: 11px;
    box-sizing: border-box;
    animation: ${loadingAnimation} 1.5s ease infinite;
  }
`;

interface ILoaderProps {
  isLoading: boolean;
  isError: boolean;
  isReady: boolean;
}

const Loader: FC<ILoaderProps> = ({ isLoading, isError, isReady }) => {
  return (
    <>
      {isLoading && !isReady ? (
        <StyledLoader>
          <span />
          <p>
            Jeszcze chwilka
            <span />
            <span />
            <span />
          </p>
        </StyledLoader>
      ) : isError ? (
        <Error />
      ) : null}
    </>
  );
};

export default Loader;
