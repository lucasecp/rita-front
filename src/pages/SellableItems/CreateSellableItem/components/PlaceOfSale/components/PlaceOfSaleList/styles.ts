import styled from 'styled-components'
import colors from '@/styles/colors'

<<<<<<< HEAD:src/pages/SellableItems/CreateSellableItem/components/PlaceOfSale/components/PlaceOfSaleList/styles.ts
export const Table = styled.table`
=======
type ContainerProps = {
  viewMode?: any
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  > header {
>>>>>>> 064432139f5c357df10524c8b8c9bcf531d6d9fe:src/pages/SellableItems/CreateSellableItem/components/RangeOfUse/styles.ts
    display: flex;
    flex-direction: column;
    overflow: auto;

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
            border: 1px solid ${colors.gray.dark};

            + div {
              margin-top: 8px;
            }

            > p {
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              color: ${colors.gray.dark};
              padding: 4px 0px;
            }

            > svg {
              cursor: pointer;
              fill: ${colors.gray.dark};
              padding: 10px 0px 10px 8px;
              box-sizing: content-box;
            }
          }

          > button {
            color: ${colors.gray.dark};

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
`
