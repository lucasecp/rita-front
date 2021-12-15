import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  > div:first-child {
    width: 147px;
    height: 147px;
    background: #eeeeee;
    border-radius: 50%;
    margin-right: 24px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #303030;
    line-height: 30px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #6a6a6a;
    line-height: 25px;
    padding: 0 0 24px 0;
  }
  li {
    > h6 {
      font-size: 16px;
      font-style: normal;
      line-height: 20px;
      text-align: left;
      color: #6a6a6a;
      padding: 0 0 8px 0;
      > span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #303030;
        padding: 0 8px 0 0;
      }
    }
  }
`
