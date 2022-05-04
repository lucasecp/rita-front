import styled, { css } from 'styled-components'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-order.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up-order.svg'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.main};
  align-items: center;
  min-height: 83px;
  max-height: 83px;
  justify-content: flex-start;
  :first-child {
    margin-left: 32px;
  }
  :last-child {
    /* justify-content: space-between; */
  }

  margin-right: 24px;

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
    color: #fff;
    font-family: Athletics;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    max-width: 80px;
  }
`
export const Container = styled.header`
  margin: 0 -32px;
  background: #afafaf;
  min-width: fit-content;
  > div {
    display: flex;
    align-items: center;
    width: 100%;
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
  }
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
