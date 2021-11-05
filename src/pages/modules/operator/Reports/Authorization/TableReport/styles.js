import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin: 0 -32px;
  padding: 0 32px;
  background: #fff;
  overflow-x: auto;
  border: solid 1px #afafaf;

  header > div,
  ul li {
    min-width: 150px;
    max-width: 150px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    min-width: fit-content;
    :after {
      content: '';
      height: 1px;
      width: calc(100% + 32px);
      position: absolute;
      background: #afafaf;
      left: 0;
      bottom: 0;
      margin: 0 -32px;

    }
    :last-child:after {
      display: none;
    }
    li {
      padding: 16px 0;
      font-family: Athletics;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      color: #6a6a6a;
    }
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
`
export const ResultsFounds = styled.div`
  margin: 24px 0 16px 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: #909090;

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
