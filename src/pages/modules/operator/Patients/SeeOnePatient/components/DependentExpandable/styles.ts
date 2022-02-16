import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

interface ContainerProps {
  expanded: boolean
}

export const Container = styled.div<ContainerProps>`
  padding-top: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.gray.light};

  & + & {
    padding-top: 24px;
  }

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
      margin-right: -22px;

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

      visibility: hidden;
      overflow: hidden;
      min-height: 0px;
      height: 0px;
      /* padding-bottom: 4px; */

      ${({ expanded }) =>
        expanded &&
        css`
          opacity: 1;
          visibility: visible;

          margin-top: 24px;
          /* height: 176px; */
          height: auto;
          padding-bottom: 4px;
        `}
    }
  }

  @media (max-width: 767px) {
    > header {
      > h2 {
        font-size: 20px;
        line-height: 1.3;
      }
    }

    > section {
      grid-template-columns: 1fr;

      + section {
        ${({ expanded }) =>
          expanded &&
          css`
            height: 356px;
          `}
      }
    }
  }
`
