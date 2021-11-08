import styled, { css } from 'styled-components'
import arrowDown from '@/assets/icons/arrow-down-order.svg'
import arrowUp from '@/assets/icons/arrow-up-order.svg'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #9146ff;
  align-items: center;
  min-height: 83px;
  max-height: 83px;
  justify-content: flex-start;
  :first-child{
    margin-left:  32px;
  }

  margin-right: 20px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    padding: 20px;
    height: 100%;
    margin-left: 4px;
    margin-right: 4px;
  }
  h5 {
    color: #fff;
    font-family: Athletics;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    max-width: 80px
  }
`
export const Container = styled.header`
  display: flex;
  align-items: center;
  margin:  0 -32px;
  justify-content: space-between;
  background: #afafaf;
  min-width: fit-content;
`

export const ArrowUp = styled.button`
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
    filter: invert(100%) sepia(0%) saturate(4%) hue-rotate(172deg)
      brightness(303%) contrast(101%);
    ${({ order }) =>
      order &&
      css`
        filter: invert(100%) sepia(0%) saturate(4%) hue-rotate(172deg)
          brightness(10003%) contrast(101%);
      `}
  }
`

export const ArrowDown = styled.button`
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
    filter: invert(100%) sepia(0%) saturate(4%) hue-rotate(172deg)
      brightness(303%) contrast(101%);
  }
  ${({ order }) =>
    order &&
    css`
      filter: invert(100%) sepia(0%) saturate(4%) hue-rotate(172deg)
        brightness(10003%) contrast(101%);
    `}
`
