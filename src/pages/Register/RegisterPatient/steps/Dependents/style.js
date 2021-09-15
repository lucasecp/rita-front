import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    margin-top: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3,
  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #6a6a6a;
    margin-bottom: 40px;
    align-self: flex-start;
  }
  h2 {
    margin-bottom: 70px;
  }
  > ul {
    align-self: stretch;
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        display: flex;
        align-items: center;
      }
      button {
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        font-family: Athletics;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: #6a6a6a;
        padding:0;
        +button{
          margin-left:25px
        }
        img {
          margin-right: 10px;
        }
      }
      ::after {
        content: '';
        height: 2px;
        width: 100%;
        display: block;
        background: #eeeeee;
        flex: 0 0 100%;
        margin-top: 10px;
      }
      li {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #909090;
        span {
          color: #6a6a6a;
          font-family: Athletics;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          margin-left: 8px;
        }
      }
    }
  }
`
