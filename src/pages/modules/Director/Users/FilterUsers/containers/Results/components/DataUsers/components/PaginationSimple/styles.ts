import styled, { css } from 'styled-components'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
// import { Link } from 'react-router-dom'

interface PrevNextProps {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 32px;

  > div {
    display: flex;
    align-items: center;
    color: #909090;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    select {
      min-width: 55px;
      margin-left: 16px;
    }
    &:last-child {
      margin-right: -6px;
    }

    @media (max-width: 767px) {
      :first-child {
        flex-direction: column;
        align-items: stretch;
        select {
          margin-left: 0px;
          min-width: 100%;
        }
      }
    }
  }
`
export const Next = styled.button<PrevNextProps>`
  background-image: url(${arrowRight});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 30px;
  height: 30px;
  cursor: default !important;

  ${({ active }) =>
    active &&
    css`
      cursor: pointer !important;
      filter: invert(31%) sepia(80%) saturate(3735%) hue-rotate(251deg)
        brightness(101%) contrast(101%);
    `}
`
export const Prev = styled.button<PrevNextProps>`
  background-image: url(${arrowLeft});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 30px;
  height: 30px;
  cursor: default !important;

  ${({ active }) =>
    active &&
    css`
      cursor: pointer !important;
      filter: invert(31%) sepia(80%) saturate(3735%) hue-rotate(251deg)
        brightness(101%) contrast(101%);
    `}
`