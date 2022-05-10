import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  text-align: center;

  > p {
    font-size: 20px;
    line-height: 1.5;
    word-wrap: break-word;
    color: ${colors.gray.dark};
  }

  > * + p {
    margin-top: 10px;
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
