import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
