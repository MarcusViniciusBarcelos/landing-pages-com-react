import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    border-radius: 50%;
    opacity: 0.7;
  `}
`;
