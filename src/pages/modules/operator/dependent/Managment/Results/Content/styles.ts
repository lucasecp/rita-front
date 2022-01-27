import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

interface StatusTypeProps {
  type: string
}

export const Container = styled.div`
  padding: 0px 32px;
  min-width: max-content;

  > ul {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    position: relative;
    align-items: center;
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
    min-width: 170px;
    max-width: 170px;
    display: flex;
    justify-content: center;
    > div {
      width: fit-content;
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
  @media (max-width: 767px) {
    padding: 0 24px;
    > ul::after {
      left: -24px;
      width: calc(100% + 48px);
    }
  }
`
export const Status = styled.li<StatusTypeProps>`
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
    type === 'Negado' &&
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
    type === 'Inativo' &&
    css`
      > span {
        background: ${colors.gray.middleLight};
        color: #fff;
      }
    `}
`
