import styled from 'styled-components'
import colors from '@/styles/colors'

export const MessageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 24px;

  max-width: 560px;

  > header {
    > h3 {
      color: ${({ theme }) => theme.main};
      font-size: 24px;
      line-height: 1.5;
      text-align: center;
    }

    > p {
      color: ${colors.gray.middle};
      font-size: 20px;
      line-height: 1.2;
      text-align: center;

      small {
        font-size: 0.8em;
      }
    }
  }

  > section {
    width: 100%;
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
    > footer {
      flex-direction: column;
      width: 100%;

      > * {
        width: 100%;
      }
    }
  }
`

export const Values = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* justify-content: center; */
  gap: 24px;

  > div {
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;

    width: 240px;

    > div {
      border: 1px solid ${({ theme }) => theme.main};
      border-radius: 8px;
      padding: 20px;

      cursor: pointer;
      transition: background-color 300ms;

      > h4 {
        color: ${({ theme }) => theme.main};
        font-size: 20px;
      }

      > p {
        color: ${({ theme }) => theme.main};
        font-size: 16px;
        line-height: 1.5;

        em {
          font-style: normal;
          display: inline-block;

          border: 1px solid ${({ theme }) => theme.main};
          border-radius: 16px;
          padding: 0 8px;

          svg {
            height: 12px;
            vertical-align: text-top;
          }
        }
      }

      &.active {
        background-color: ${({ theme }) => theme.main};

        > h4,
        > p {
          color: #fff;
        }

        > p em {
          border-color: #fff;
        }
      }
    }
  }

  > button {
    color: ${colors.gray.middle};
    font-size: 16px;
  }

  > p {
    flex-grow: 1;

    color: ${colors.orange.middleDark};
    font-size: 12px;
    text-align: center;
  }
`

export const InputAndValues = styled.div`
  > section {
    position: relative;

    > p {
      position: absolute;
      right: 8px;
      top: 25px;
      transform: translateY(-50%);

      color: ${colors.gray.middle};
      font-size: 16px;

      strong {
        background-color: ${({ theme }) => theme.extraLight};
        border-radius: 16px;
        color: ${({ theme }) => theme.main};
        line-height: 24px;
        padding: 0 8px;

        display: inline-block;
        vertical-align: middle;

        svg {
          height: 14px;
          vertical-align: text-top;
        }
      }
    }
  }

  > footer {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;

    margin-top: 20px;

    > button {
      background-color: #fff;
      border: 1px solid ${colors.gray.middle};
      border-radius: 16px;
      color: ${colors.gray.middle};
      font-size: 16px;
      line-height: 28px;
      padding: 0 12px;

      transition-property: color, border-color;
      transition-duration: 300ms;

      &:hover {
        color: ${({ theme }) => theme.medium};
        border-color: ${({ theme }) => theme.medium};
      }
    }
  }
`

export const SelectPaymentOptions = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  > div {
    border: 1px solid ${({ theme }) => theme.main};
    border-radius: 8px;

    width: 232px;
    height: 130px;
    padding: 18px;

    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    align-content: space-between;

    cursor: pointer;
    transition: background-color 300ms;

    > h4 {
      color: ${({ theme }) => theme.main};
      font-size: 18px;
    }

    > svg {
      align-self: flex-end;
      color: ${({ theme }) => theme.main};
      width: 30px;
    }

    &.active {
      background-color: ${({ theme }) => theme.main};

      > h4,
      > svg {
        color: #fff;
      }
    }

    &.pix {
      > svg {
        fill: #fff;
        width: 20px;
      }

      &.active {
        > svg {
          fill: ${({ theme }) => theme.main};
        }
      }
    }
  }

  > p {
    flex-grow: 1;

    color: ${colors.orange.middleDark};
    font-size: 12px;
    text-align: center;
  }
`

export const PixInfo = styled.section`
  display: grid;
  grid-template-columns: 180px auto;
  align-items: center;
  gap: 12px 24px;

  > div {
    grid-row: span 2;

    border: 1px solid ${colors.gray.light};
    /* border-radius: 8px; */
    padding: 12px;
  }

  > p {
    background: ${({ theme }) => theme.extraLight};
    border-radius: 8px;
    padding: 18px;

    color: ${colors.gray.middle};
    font-size: 12px;
    line-height: 1.4;
    word-break: break-all;
  }

  > button {
    svg {
      height: 18px;
      fill: ${({ theme }) => theme.main};
      margin-left: 10px;
    }

    &:hover {
      svg {
        fill: ${({ theme }) => theme.darkness};
      }
    }
  }

  @media (max-width: 539px) {
    display: flex;
    flex-flow: column nowrap;
  }
`
