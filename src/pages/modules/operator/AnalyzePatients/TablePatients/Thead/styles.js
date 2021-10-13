import styled, { css } from 'styled-components'
import arrowDown from '@/assets/icons/arrow-down-order.svg'
import arrowUp from '@/assets/icons/arrow-up-order.svg'
import colors from '@/styles/colors'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #9146ff;
  background-color: ${colors.purple.main.light};
  margin-top: -2px;
  margin-bottom: -2px;
  justify-content: space-between;
  padding-right: 24px;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-left: 55px;
    padding: 20px;
    height: 100%;
  }
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
  }
  ${({ order }) =>
    order &&
    css`
      filter: invert(31%) sepia(94%) saturate(2904%) hue-rotate(222deg)
        brightness(100%) contrast(103%);
    `}
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
  }
  ${({ order }) =>
    order &&
    css`
        filter: invert(31%) sepia(94%) saturate(2904%) hue-rotate(222deg)
        brightness(100%) contrast(103%);
    `}
`
