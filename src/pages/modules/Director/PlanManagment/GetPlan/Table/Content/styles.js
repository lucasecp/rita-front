import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 0px 32px;
  min-width: max-content;

  > ul {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    position: relative;
    &::after {
      content: '';
      height: 1px;
      width: calc(100% + 64px);
      position: absolute;
      display: block;
      bottom: 0;
      left: -32px;

      background: ${colors.purple.background.light};
    }
  }
  > ul li {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 24px;
    min-width: 150px;
    max-width:150px;
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
    padding: 32px 0
  }
`
export const Status = styled.li`
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
        color: ${colors.purple.background.light};
      }
    `}
  ${({ type }) =>
    type === 'Pendente' &&
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
