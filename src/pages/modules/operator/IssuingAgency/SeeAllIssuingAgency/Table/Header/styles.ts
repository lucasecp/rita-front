import styled, { css } from 'styled-components'
import arrowDown from '@/assets/icons/arrow-down-order.svg'
import arrowUp from '@/assets/icons/arrow-up-order.svg'
import colors from '@/styles/colors'

interface ArrowProps {
  order: number
}


export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #9146ff;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
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
    display: flex;
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

export const ArrowUp = styled.button<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 1.5px;
  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${arrowUp});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    ${({ order }) =>
      order &&
      css`
        filter: invert(31%) sepia(94%) saturate(2904%) hue-rotate(222deg)
          brightness(100%) contrast(103%);
      `}
  }
`

export const ArrowDown = styled.button<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-top: 1.5px;
  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${arrowDown});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
  }
  ${({ order }) =>
    order &&
    css`
      filter: invert(31%) sepia(94%) saturate(2904%) hue-rotate(222deg)
        brightness(100%) contrast(103%);
    `}
`
