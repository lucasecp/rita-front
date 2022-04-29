import styled, { css } from 'styled-components'
import { ReactComponent as PrevIcon } from '@/assets/icons/arrow-left.svg'
import { ReactComponent as NextIcon } from '@/assets/icons/arrow-right.svg'

interface PrevNextProps {
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
export const Next = styled(NextIcon)<PrevNextProps>`
  width: 30px;
  height: 30px;
  cursor: default !important;

  > path {
    stroke: ${({ theme }) => theme.mediumLight};
  }

  ${({ active }) =>
    active &&
    css`
      cursor: pointer !important;
      > path {
        stroke: ${({ theme }) => theme.main};
      }
    `}
`
export const Prev = styled(PrevIcon)<PrevNextProps>`
  width: 30px;
  height: 30px;
  cursor: default !important;

  > path {
    stroke: ${({ theme }) => theme.mediumLight};
  }

  ${({ active }) =>
    active &&
    css`
      cursor: pointer !important;
      > path {
        stroke: ${({ theme }) => theme.main};
      }
    `}
`
