import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 32px 32px;
  background: #F8F5FF;
  > h2 {
    padding: 16px 0 32px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #6a6a6a;
    display: flex;
    align-items: center;
    white-space: nowrap;
    &::after{
      content: '';
      display: inline-block;
      height: 1px;
      width: 100%;
      margin-left: 13px;
      background: #7338CB;
      margin-top: 3px
    }
  }
  >*:last-child{
    margin-top: 40px
  }
  @media(max-width: 767px){
    padding: 0  24px 24px 24px
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  @media(max-width: 1200px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 767px){
    grid-template-columns: 100%;
  }
 >*{

 }

`
