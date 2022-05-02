import styled, { css } from 'styled-components'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-order.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up-order.svg'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.light};
  margin-top: -2px;
  margin-bottom: -2px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    height: 100%;
  }
  >p{
    color: ${({ theme }) => theme.darkeness}
  }
`

export const ArrowUp = styled(ArrowUpIcon)`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 1.5px;
  > path {
    fill: ${({ theme }) => theme.mediumLight};
  }

  ${({ order }) =>
    order &&
    css`
      > path {
        fill: ${({ theme }) => theme.medium};
      }
    `}
`

export const ArrowDown = styled(ArrowDownIcon)`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-top: 1.5px;
  > path {
    fill: ${({ theme }) => theme.mediumLight};
  }

  ${({ order }) =>
    order &&
    css`
      > path {
        fill: ${({ theme }) => theme.medium};
      }
    `}
`
