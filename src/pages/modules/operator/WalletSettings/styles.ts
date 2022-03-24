import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  > section {
    padding: 32px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
    border-radius: 8px;

    > h3 {
      font-size: 24px;
      color: ${colors.gray.dark};
    }

    &.empty {
      background-color: ${({ theme }) => theme.main};

      > p {
        font-size: 18px;
        color: #fff;
        text-align: center;

        a {
          color: inherit;
          box-shadow: 0 -2px 0 0 #fff inset;
        }
      }
    }

    &.activated {
      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        gap: 24px;

        max-width: 664px;
        margin-top: 24px;

        > section {
          flex-grow: 1;

          > h4 {
            color: ${colors.gray.middle};
            font-size: 16px;
            text-transform: uppercase;
          }

          > div {
            margin-top: 10px;
          }
        }
      }
    }

    &.configure {
      > p {
        font-size: 16px;
        color: ${colors.gray.middle};
        margin-top: 18px;

        max-width: 320px;
      }

      > .triggers {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;

        max-width: 664px;
        margin-top: 45px;
      }

      > .content {
        margin-top: 24px;
      }
    }
  }
`
