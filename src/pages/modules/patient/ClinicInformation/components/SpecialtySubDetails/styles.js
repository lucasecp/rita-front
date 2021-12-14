import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 0;
  margin: 0 0px 0 140px;
  > ul > * + *{
    margin: 25.5px 0;
  }
 > ul  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #6a6a6a;
    display: flex;
    align-items: center;
  }
  > ul > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    li:first-child {
      margin-right: 32px;
    }
    span {
      color: #303030;
      margin: 0 8px;
    }
  }
  > ul > li > * + *{
    margin: 0 8px;
  }
  > ul > li >svg{
    margin-right: 8px;
  }
 
  > ul > div + li > svg + span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    & + span {
      padding: 8px;
      background: #9146ff;
      color: #fff;
      font-family: Athletics;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      border-radius: 16px;
    }
  }
  > ul > li:last-child span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #303030;
  }
  >ul > li{
    flex-wrap: wrap;
  }
`
