import styled, { css } from 'styled-components'
import colors from '@/styles/colors'
import ArrowDownIcon from '@/assets/icons/arrow-down-order.svg'
import ArrowUpIcon from '@/assets/icons/arrow-up-order.svg'

export const Container = styled.div`
  > table {
    width: 100%;

    thead tr th,
    tbody tr td {
      color: ${colors.gray.dark};
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
      vertical-align: middle;

      padding: 24px 12px;
      min-width: 150px;

      &.fit {
        width: 1%;
        white-space: nowrap;
      }
    }

    thead {
      background: ${({ theme }) => theme.light};
      padding: 0 32px;

      tr th {
        padding-top: 12px;
        padding-bottom: 12px;

        h5 {
          display: flex;
          align-items: center;
          justify-content: space-between;

          color: ${({ theme }) => theme.main};

          > div {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            cursor: pointer;

            margin-right: 12px;
          }
        }
      }
    }

    tbody {
      tr {
        border-top: 1px solid ${({ theme }) => theme.extraLight};

        &:first-child {
          border-top: none;
        }

        &.child {
          background-color: ${colors.gray.extraLight};
          border-top: none;
        }
      }
    }
  }
`

type ArrowProps = {
  order?: number
}

export const HeaderArrowUp = styled.button<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 1.5px;

  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${ArrowUpIcon});
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

export const HeaderArrowDown = styled.button<ArrowProps>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-top: 1.5px;

  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${ArrowDownIcon});
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

export const BodyCell = styled.td<{ fit?: boolean }>`
  ${({ fit }) =>
    fit &&
    css`
      width: 1%;
      white-space: nowrap;
    `}
`
