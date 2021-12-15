import styled from 'styled-components'

export const Content = styled.div`
  border-radius: 8px;
  background: #fff;
  padding: 0 32px 40px 32px;

  > div:first-child {
    background: #eeeeee;
    padding: 16px 32px;
    border-radius: 8px 8px 0 0;
    margin: 0 -32px 40px -32px;
    > a {
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      text-align: left;
      color: #6a6a6a;
      > svg {
        margin-right: 8px;
      }
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #7338cb;
    display: flex;
    white-space: nowrap;
    align-items: center;
    margin: 40px 0 16px 0;
    &::after {
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      margin-left: 13px;
      background: #7338cb;
      margin-top: 3px;
    }
  }
`
