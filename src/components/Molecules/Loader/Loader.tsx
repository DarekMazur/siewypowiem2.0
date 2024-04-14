import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import Error from '../Error/Error';

const loadingAnimation = keyframes`
  0% {
    box-shadow: 1.2rem 0rem rgba(252, 252, 255, 0), 3.8rem 0rem  rgba(252, 252, 255, 0.3), 6.4rem 0rem rgba(252, 252, 255, 0);
  }
  50% {
    box-shadow: 1.2rem -0.5rem rgba(252, 252, 255, 0.5), 3.8rem -0.3rem rgba(252, 252, 255, 0.5), 6.4rem -0.2rem rgba(252, 252, 255, 0.6);
  }
  100% {
    box-shadow: 1.2rem -0.8rem rgba(252, 252, 255, 0), 3.8rem -0.5rem rgba(252, 252, 255, 0), 6.4rem -0.5rem rgba(252, 252, 255, 0);
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
  width: 10rem;
  height: 8rem;
  margin-top: 3rem;
  display: inline-block;
  position: relative;
  border: ${({ theme }) => `0.4rem solid ${theme.colors.black}`};
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
    bottom: -10rem;
    width: 20rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    left: 50%;
    transform: translateX(-50%);

    span {
      background-color: ${({ theme }) => theme.colors.black};
      width: 0.3rem;
      height: 0.3rem;
      bottom: 0.25rem;
      border-radius: 50%;
      display: inline-block;
      transform: translateX(0.3rem);
      animation: ${blink} 0.7s 1s ease infinite;

      &:nth-of-type(2) {
        transform: translateX(0.8rem);
        animation: ${blink} 0.7s 0.5s ease infinite;
      }

      &:nth-of-type(3) {
        transform: translateX(1.3rem);
        animation: ${blink} 0.7s ease infinite;
      }
    }
  }

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 10rem;
    top: 3.5rem;
    border: ${({ theme }) => `0.4rem solid ${theme.colors.black}`};
    width: 2rem;
    height: 3.5rem;
    border-radius: 0 0.8rem 0.8rem 0;
    transform: translateY(-50%);
  }
  &::before {
    content: '';
    position: absolute;
    width: 0.3rem;
    height: 3.5rem;
    color: ${({ theme }) => theme.colors.white};
    top: -4rem;
    left: 1.1rem;
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
