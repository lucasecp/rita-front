import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 -32px;
  padding: 0 32px;
  background: #fff;
  overflow-x: auto;
  border: solid 1px #afafaf;

  header > div > div,
  ul li {
    min-width: 150px;
    max-width: 150px;
  }
  ul {
    display: flex;
    align-items: flex-start;
    position: relative;
    min-width: fit-content;
    margin: 0 -32px 0 0;
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
      max-width: 150px;
      margin-right: 24px;
      word-break: normal;
      :last-child {
        padding: 16px 32px 16px 0;
      }
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

export const NotFound = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: #6a6a6a;
  margin: 32px auto;
`
