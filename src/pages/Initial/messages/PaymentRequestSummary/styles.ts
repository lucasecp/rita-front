import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 24px;

  max-width: 500px;

  > header {
    width: 100%;

    h3 {
      font-size: 24px;
      color: ${colors.gray.dark};
    }
  }

  > section {
    width: 100%;
    max-height: 300px;
    overflow: auto;

    table {
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

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.gray.light};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.gray.middleLight};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover,
    &::-webkit-scrollbar-thumb:active {
      background: ${colors.gray.middle};
    }
  }

  > footer {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 18px 24px;

    white-space: nowrap;

    > a > button {
      width: 100%;
    }
  }

  @media (max-width: 539px) {
    > header > p {
      flex-direction: column;
    }

    > section > div {
      grid-template-areas:
        'first . last'
        'first . last';
    }

    > footer {
      flex-direction: column;
      width: 100%;

      > * {
        width: 100%;
      }
    }
  }
`
