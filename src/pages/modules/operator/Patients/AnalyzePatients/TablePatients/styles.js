import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: 0 -32px;
  padding: 0 32px;
  background: #fff;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    min-width: 150px;
  }

  th:last-child > div > div {
    margin-right: -20px;
  }
  th:first-child > div {
    margin-left: -32px;
    padding-left: 32px;
  }
  th:last-child > div {
    margin-right: -32px;
    padding-right: 32px;
  }
  + div {
    padding: 37px 32px;
    background-color: #fff;
    margin: 0 -32px;
    border-radius: 0 0 8px 8px;
    @media (max-width: 767px) {
      margin: 0 -24px;
      padding: 32px 24px;
    }
  }
  @media (max-width: 767px) {
    margin: 0 -24px;
    padding: 0px 24px;
  }
  tr {
    position: relative;
  }
 thead tr:after,thead tr:before {
    width:0;
    height:0
  }
  tr:after {
    content: '';
    height: 1px;
    width: 64px;
    position: absolute;
    background: #efeafa;
    left: -32px;
    bottom:0
  }
  tr:before {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    background: #efeafa;
    right: -32px;
    bottom:0;
    margin-left:-32px;
  }
`
export const Td = styled.td`
  padding: 25.5px 0;
  cursor: pointer;
  text-transform: capitalize;

  div {
    margin: -25.5px 0;
    margin-right: 60px;
    padding: 25.5px 0;
  }
  span {
    padding: 3px 10px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
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



  ${({ soft }) =>
    soft &&
    css`
      color: #909090;
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
      color: #6a6a6a;
    `}
`

export const NotFound = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #6a6a6a;
  margin: 32px 0;
`
