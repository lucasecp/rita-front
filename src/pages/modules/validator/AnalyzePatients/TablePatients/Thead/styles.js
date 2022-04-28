import styled, { css } from 'styled-components'
import arrowDown from '@/assets/icons/arrow-down-order.svg'
import arrowUp from '@/assets/icons/arrow-up-order.svg'
import colors from '@/styles/colors'

export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color${({ theme }) => theme.main};
  background-color: ${({ theme }) => theme.mediumLight};
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
