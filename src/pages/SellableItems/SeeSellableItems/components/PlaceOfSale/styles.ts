import styled from 'styled-components'
import colors from '@/styles/colors'

export const Table = styled.table`
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
        border: 1px solid ${({ theme }) => theme.light};

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

          > path {
            cursor: pointer;
            fill: ${colors.gray.dark};
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
