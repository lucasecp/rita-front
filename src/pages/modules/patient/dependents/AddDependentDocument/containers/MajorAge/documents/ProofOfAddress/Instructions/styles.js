import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding-top: 16px;

  > h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${colors.gray.dark};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 32px;
    justify-items: center;

    gap: 64px;

    > aside {
      > #box-information {
        padding: 16px;
        background-color: ${colors.gray.extraLight};
        border-radius: 8px;

        > h4 {
          font-weight: 500;
          font-size: 20px;
          line-height: 25px;

          color: ${colors.purple.main.dark};
        }

        > ul {
          margin-top: 16px;
          padding-left: 24px;

          > li {
            list-style: disc;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: ${colors.gray.middle};
          }

          > li + li {
            margin-top: 12px;
          }
        }
      }

      > #box-information + div {
        margin-top: 24px;
        margin-bottom: 8px;
      }

      > div {
        display: flex;
        flex-direction: column;

        > span {
          color: ${colors.gray.middle};
          font-size: 12px;
          font-weight: 400;
          line-height: 15px;
        }

        > span:first-child {
          color: ${colors.gray.dark};
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 880px) {
    > div {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    > div aside div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }
`
