import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

type ContainerProps = {
  viewMode?: any
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  > header {
    display: flex;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.middle};

    > span {
      flex: 1;
      border-bottom: 1px solid ${colors.gray.middle};
      margin-bottom: 5.5px;
      margin-left: 4px;
    }
  }

  /* > div {
    margin-top: 16px;
    display: flex;

    > section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
    }

    > button {
      margin-left: 40px;
      margin-top: 22px;
    }
  } */

  > small {
    margin-top: 8px;

    font-size: 10px;
    line-height: 12px;

    color: ${colors.orange.middleDark};
  }

  > table {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    > thead tr {
      border-radius: 8px 8px 0 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      min-width: 660px;
      background: ${colors.gray.light};

      > th {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        color: ${colors.gray.middle};
        padding: 8px 16px;
      }
    }

    > tbody {
      > tr {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        > td {
          min-width: 220px;
          padding: 16px;
          border: 1px solid ${colors.purple.background.middle};

          display: flex;
          flex-direction: column;

          > div {
            width: fit-content;
            padding: 0px 12px 0px 12px;
            display: flex;
            align-items: center;

            border-radius: 16px;
            border: 1px solid ${colors.purple.main.darkness};

            ${({ viewMode }) =>
              viewMode &&
              css`
                padding: 0px 12px;
                border: 1px solid ${colors.gray.dark};
                ?: ;
              `};

            + div {
              margin-top: 8px;
            }

            > p {
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              color: ${colors.purple.main.darkness};
              padding: 4px 0px;

              ${({ viewMode }) =>
                viewMode &&
                css`
                  color: ${colors.gray.dark};
                `};
            }

            > svg {
              cursor: pointer;
              fill: ${colors.purple.main.darkness};
              padding: 10px 0px 10px 8px;
              box-sizing: content-box;
            }
          }

          > button {
            color: ${colors.purple.main.darkness};

            font-weight: 500;
            font-size: 16px;
            line-height: 20px;

            text-align: end;

            margin-top: 8px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    /* > div {
      flex-direction: column;

      > section {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      > button {
        margin-left: 0px;
        margin-top: 40px;
        width: 100%;
      }
    } */
  }
`
