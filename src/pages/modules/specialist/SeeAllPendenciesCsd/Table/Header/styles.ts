/* eslint-disable prettier/prettier */
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-order.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up-order.svg'
import styled, { css } from 'styled-components'

interface ArrowProps {
  order: number
}

interface Columnrops {
  conditionWidth?: string
}

export const Content = styled.div<Columnrops>`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  align-items: center;
  justify-content: flex-start;
  min-width: 210px;
  max-width: 210px;
  margin-right: 24px;
  :last-child {
    margin-right: 0px;
  }
  /* :first-child {
    min-width: ${({ conditionWidth }) => conditionWidth === 'numProtocolo' ? '150px' : '250px'};
    max-width: ${({ conditionWidth }) => conditionWidth === 'numProtocolo' ? '150px' : '250px'};
  } */
  :first-child {
    min-width: 250px;
    max-width: 250px
  }
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding: 20px;
    height: 100%;
    margin-left: 4px;
    margin-right: 4px;
    :last-child {
    }
  }
  h5 {
    color: ${({ theme }) => theme.darkness};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
`
export const Container = styled.header`
  background: ${({ theme }) => theme.light};
  min-width: fit-content;
  padding: 0 32px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`

export const ArrowUp = styled(ArrowUpIcon) <ArrowProps>`
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

export const ArrowDown = styled(ArrowDownIcon) <ArrowProps>`
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
