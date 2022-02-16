import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
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

    > div.static-field,
    div.has-three-in-row div {
      display: flex;
      flex-direction: column;

      gap: 8px;

      line-height: 20px;

      > label {
        color: ${colors.gray.middleLight};

        font-weight: 300;
        font-size: 14px;
      }

      > p {
        color: ${colors.black};

        font-weight: 500;
        font-size: 16px;
      }
    }

    div.has-three-in-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

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

  > section:first-of-type {
    ${({ expanded }) =>
      expanded &&
      css`
        padding-bottom: 22px;
        border-bottom: 2px solid #eeeeee;
      `}
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
