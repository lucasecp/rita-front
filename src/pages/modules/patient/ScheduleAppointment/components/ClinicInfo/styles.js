import styled from 'styled-components'

export const Container = styled.div`
  padding: 27px 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  >div:first-child{
    width:130px;
    height: 130px;
    border-radius: 50%;
    background: #f8f5ff;
    margin-bottom: 21px;

  }
  > h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    color: #303030;
    margin-bottom: 11px;
  }
  > ul {
    margin-bottom: 22px;

    > li {

      h6 {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
        color: #909090;
      }
      p {
        color: #303030;
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
      }
      & + li {
        margin-top: 11px;
      }
      >svg{
        margin-left: 7px;
        align-self: flex-end;
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
    margin-top: auto;
    align-self: flex-end;
    svg{
      margin-left:4px
    }
  }
`
