import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding-top: 0;
    padding-bottom: 0;

      img {
        max-height: 3rem;
      }

  `}
`;
