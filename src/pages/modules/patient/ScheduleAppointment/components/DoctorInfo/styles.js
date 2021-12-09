import styled from 'styled-components'

export const Container = styled.div`
  padding: 27px 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  > h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    color: #303030;
    margin-bottom: 11px;
  }
  > ul {
    > li {
      &:first-child {
        display: flex;
        align-items: center;
      }
      h6 {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        color: #909090;
      }
      p {
        color: #303030;
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
      }
      & + li {
        margin-top: 11px;
      }
    }
  }
  > a {
    text-align: right;
    font-family: Athletics;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #9146FF;

  }
`
