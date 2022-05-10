import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  max-height: 300px;
  overflow: auto;

  > ul {
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    text-align: center;

    li {
      color: ${colors.gray.dark};
      font-size: 20px;
      line-height: 1.2;

      span {
        display: block;
        color: ${({ theme }) => theme.main};
      }
    }
  }

  > table {
    width: 100%;

    thead tr th,
    tbody tr td {
      padding: 18px;
      font-size: 16px;
      line-height: 1.2;
      vertical-align: middle;
    }

    thead {
      background-color: ${({ theme }) => theme.light};

      tr th {
        color: ${({ theme }) => theme.main};
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid ${colors.gray.light};

        td {
          color: ${colors.gray.dark};

          &.price {
            small {
              display: block;
              font-size: 14px;

              &:first-child {
                text-decoration: line-through;
              }
            }

            svg {
              height: 9px;
            }
          }

          &.total {
            color: ${({ theme }) => theme.main};
          }
        }
      }
    }
  }
`
