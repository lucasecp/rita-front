import styled, { css } from 'styled-components'
import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow-down-order.svg'
import { ReactComponent as ArrowUpIcon } from '@/assets/icons/arrow-up-order.svg'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color${({ theme }) => theme.main};
  align-items: center;
  justify-content: flex-start;
  min-width: 150px;
  margin-right: 24px;

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
  margin: 0 -32px;
  > div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    padding: 0 24px;
    margin: 0 -24px;
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
