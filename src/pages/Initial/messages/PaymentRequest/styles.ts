import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 24px;

  max-width: 460px;

  > section {
    width: 100%;
    text-align: center;

    > h3 {
      font-size: 24px;
      color: ${colors.gray.dark};
    }

    > p {
      font-size: 20px;
      line-height: 1.5;
      word-wrap: break-word;
      color: ${colors.gray.dark};
    }

    > * + p {
      margin-top: 10px;
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
    > footer {
      flex-direction: column;
      width: 100%;

      > * {
        width: 100%;
      }
    }
  }
`

export const BodyAmountToPay = styled.p`
  > span {
    display: block;
    color: ${({ theme }) => theme.main};
  }

  small {
    font-size: 0.8em;
  }

  svg {
    height: 12px;
    vertical-align: text-top;
  }
`
