import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  > div:first-child {
    width: 320px;
    height: 188px;
    background: #eeeeee;
    border-radius: 8px;
    margin-right: 24px;
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    color: #303030;
    margin-bottom: 8px;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #6a6a6a;
    margin-bottom: 24px;
    > svg {
      margin-left: 8px;
    }
    a {
      margin-left: 16px;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: #9146ff;
      text-decoration: underline;
    }
    > span {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      color: #303030;
      display: flex;
      align-items: center;
      &+span{
       margin-left: 24px;
      }
      svg{
        margin-right: 8px
      }
    }
  }
`
