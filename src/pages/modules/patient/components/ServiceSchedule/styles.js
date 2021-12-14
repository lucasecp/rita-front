import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 24px 24px;
  border: solid 1px #efeafa;
  border-radius: 8px;
  max-width: 1000px;
  header {
    display: flex;
    flex-direction: column;
    margin: 0 -24px;
    > h5 {
      background: #efeafa;
      color: #7338cb;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
      padding: 8px;
    }
    > ul {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      > li {
        color: #6a6a6a;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        min-width: 155px;
        max-width: 155px;
        text-align: center;
        & +li{
          margin-left: 15px;
        }
      }
    }
  }
  > ul {
    display: flex;
    justify-content: center;
    & + ul{
      margin-top: 11px
    }
    > li {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #6a6a6a;
      min-width: 155px;
      max-width: 155px;
      text-align: center;
      & +li{
        margin-left: 15px;

      }
    }
  }
`
