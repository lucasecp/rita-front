import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  & + & {
    margin-top: 24px;
  }

  > h3 {
    margin-bottom: 4px;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.middle};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 16px;

    border: 2px solid ${colors.gray.light};
    box-sizing: border-box;
    border-radius: 8px;

    > h4 {
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;

      color: ${colors.purple.main.dark};
      word-break: break-all;
      padding: 14px 0;
    }

    > button {
      display: flex;
      align-items: center;

      padding: 14px 16px;

      font-weight: 500;
      font-size: 14px;
      line-height: 150%;

      color: ${colors.gray.middle};

      > svg {
        margin-right: 8px;
      }
    }

    ${({ disabled }) =>
      disabled &&
      css`
        background: ${colors.gray.light};

        > h4 {
          color: ${colors.gray.middle};
        }
        > button {
          > svg {
            fill: ${colors.gray.middle};
          }
        }
      `}
  }

  @media (max-width: 767px) {
    > h3 {
      font-size: 16px;
      line-height: 1.4;
    }

    > div {
      > h4 {
        font-size: 14px;
      }
    }
  }
`
