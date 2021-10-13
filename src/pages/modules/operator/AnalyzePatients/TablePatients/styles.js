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

`
export const Td = styled.td`
  padding: 25.5px 0;
  cursor: pointer;
  div {
    margin: -25.5px 0;
    margin-right: 60px;
    padding: 25.5px 0;
  }
  span {
  }
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
