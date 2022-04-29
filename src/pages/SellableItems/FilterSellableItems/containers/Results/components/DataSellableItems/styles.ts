import { StatusSellableItems } from '@/pages/SellableItems/FilterSellableItems/@types'
import colors from '@/styles/colors'
import { LiHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface DataSellableItemsStylesProps extends LiHTMLAttributes<HTMLLIElement> {
  type: StatusSellableItems
}

export const Container = styled.div`
  min-width: max-content;

  > ul {
    display: flex;
    padding: 24px 32px;

    justify-content: space-between;
    position: relative;

    &::after {
      content: '';
      height: 1px;
      width: calc(100% + 32);
      position: absolute;
      display: block;
      bottom: 0;
      left: -32px;

      background: ${({ theme }) => theme.extraLight};
    }
  }
  > ul li {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 24px;
    min-width: 150px;
    max-width: 150px;
    &:last-child {
      margin-right: 0;
    }
  }
  > h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${colors.gray.middle};
    text-align: center;
    padding: 32px 0;
  }
`
export const Status = styled.li<DataSellableItemsStylesProps>`
  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 16px;
    padding: 0 8px;
  }

  ${({ type }) =>
    type === 'Ativo' &&
    css`
      > span {
        background: ${colors.green.light};
        color: ${colors.green.dark};
      }
    `}
  ${({ type }) =>
    type === 'Inativo' &&
    css`
      > span {
        background: ${colors.orange.middleDark};
        color: ${({ theme }) => theme.extraLight};
      }
    `}
  ${({ type }) =>
    type === 'Em digitação' &&
    css`
      > span {
        background: ${colors.pink.middle};
        color: #fff;
      }
    `}
  ${({ type }) =>
    type === 'Suspenso' &&
    css`
      > span {
        background: ${colors.blueViola.middle};
        color: ${colors.blue.light};
      }
    `}
`
