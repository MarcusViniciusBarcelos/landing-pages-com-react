import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: ${theme.colors.primaryColor};

    &:before, &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      border-width: 0.5rem;
      border-style: solid;
      border-color: transparent;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    &:after {
      width: 8rem;
      height: 8rem;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      animation: ${rotate} 600ms linear infinite;
    }

    &:before {
      width: 4rem;
      height: 4rem;
      border-left: 0.5rem solid ${theme.colors.secondaryColor};
      border-top: 0.5rem solid ${theme.colors.secondaryColor};
      animation: ${rotate} 600ms linear reverse infinite;
    }
  `}
`;
