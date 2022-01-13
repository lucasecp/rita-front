import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  margin: 0 -32px;
  /* > :last-child {
    padding: 32px;
  } */
  background: #fff;
  overflow-x: auto;
  @media (max-width: 767px) {
    margin: 0 -24px;
  }
`

export const Content = styled.div`
  padding: 0px 32px;

  min-width: max-content;
  @media (max-width: 767px) {
    padding: 0px 24px;
  }

  > ul {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
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

export const Td = styled.li`
  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 16px;
    padding: 0 8px;
  }

  ${({ status }) =>
    status === 'Negado' &&
    css`
      span {
        background: #df644b;
        color: #f8f5ff;
      }
    `}
  ${({ status }) =>
    status === 'Aprovado' &&
    css`
      span {
        background: #acffc5;
        color: #084c4f;
      }
    `}
  ${({ status }) =>
    status === 'Em análise' &&
    css`
      span {
        background: #706bff;
        color: #c5dbfe;
      }
    `}
  ${({ status }) =>
    status === 'Pendente' &&
    css`
      span {
        background: #f89bff;
        color: #ffffff;
      }
    `}
    ${({ status }) =>
    status === 'Inativo' &&
    css`
      > span {
        background: ${colors.blue.light};
        color: ${colors.gray.dark};
      }
    `}



  ${({ soft }) =>
    soft &&
    css`
      color: #909090 !important;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
    `}
  ${({ strong }) =>
    strong &&
    css`
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      color: #6a6a6a !important;
    `}
`
