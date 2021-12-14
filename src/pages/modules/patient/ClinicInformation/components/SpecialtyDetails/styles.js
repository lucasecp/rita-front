import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 8px;
  border: solid 1px #f5f5f5;
  > div:first-child {
    border-radius: 8px 8px 0 0;
    background: #f5f5f5;
    padding: 24px;
    display: flex;
    align-items: center;
    > div:first-child {
      width: 98px;
      height: 98px;
      margin-right: 24px;
      border-radius: 50%;
      background: #6a6a6a;
    }
    > div {
      h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        color: #6a6a6a;
        margin-bottom: 8px;
      }
      > h3 {
        font-size: 16px;
        color: #6a6a6a;
        font-weight: 400;
        line-height: 20px;
      }
    }
    > svg {
      margin-left: auto;
      cursor: pointer;
    }
  }
`
