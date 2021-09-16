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
        margin: 15px 0;
      }
      li {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #909090;
       :first-child {margin-bottom: 10px;}
        span {
          color: #6a6a6a;
          font-family: Athletics;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          margin-left: 3px;
        }
      }
      @media(max-width: 539px){
        flex-direction: column;
        align-items: flex-start;
        ::after{
          flex:none
        }
        ul{
          margin-bottom: 15px;
        }
      }
    }
    @media(max-width:539px){
      div{
            justify-content: space-between;
            width:100%;
            flex-wrap: wrap;
            >button:last-child{
              margin-left: 0;
            }
          }
    }
  }
`
