import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;

    > h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;

      color: ${colors.gray.dark};
    }

    > img {
      padding: 12px 24px;
      cursor: pointer;

      transform: rotateX(${({ expanded }) => (expanded ? '180deg' : '0')});
      transition: 0.3s;
    }
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 24px 32px;

    + section {
      transition: 0.3s;
      margin-top: 24px;

      opacity: 0;
      visibility: hidden;
      max-height: 0px;

      /* margin-top: -165px; */

      ${({ expanded }) =>
        expanded &&
        css`
          opacity: 1;
          visibility: visible;
          max-height: unset;
          /* margin-top: 24px; */
        `}
    }
  }
`
