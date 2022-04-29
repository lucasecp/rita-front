import styled, { css } from 'styled-components'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-order.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up-order.svg'

interface ArrowProps {
  order: number
}

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  align-items: center;
  justify-content: flex-start;
  min-width: 217px;
  margin-right: 24px;
  :first-child {
    min-width: 474px;
  }
  :last-child {
    margin-right: 0px;
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

export const ArrowUp = styled(ArrowUpIcon)<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 1.5px;
  > path {
    stroke: ${({ theme }) => theme.mediumLight};
  }

  ${({ order }) =>
    order &&
    css`
      > path {
        stroke: ${({ theme }) => theme.medium};
      }
    `}
`

export const ArrowDown = styled(ArrowDownIcon)<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-top: 1.5px;

  > path {
    stroke: ${({ theme }) => theme.mediumLight};
  }
  ${({ order }) =>
    order &&
    css`
      > path {
        stroke: ${({ theme }) => theme.medium};
      }
    `}
`
