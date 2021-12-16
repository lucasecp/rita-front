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
      color: #6a6a6a;
      > svg {
        margin-right: 8px;
      }
    }
  }
  > h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #7338CB;
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin: 40px 0 16px 0;
    &::after{
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      margin-left: 16px;
      background: #7338CB;
      margin-top: 3px
    }

  }
  @media (max-width:767px){
    padding: 0 24px 40px 24px;
    > div:first-child {
      margin: 0 -24px 40px -24px;
    }
  }
`
export const ListItems = styled.div`
> * + *{
  margin-top: 32px
}
 
`
