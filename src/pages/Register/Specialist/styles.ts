import styled from 'styled-components'

export const Content = styled.div`
  background: #ffff;
  box-shadow: 0px 2px 8px 0px #99999940;
  padding: 0 32px;
  border-radius: 8px;
  margin-bottom: 14px;
  > * + * {
    margin-top: 40px;
  }

  > h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: #6a6a6a;
  }
  > div:first-child {
    margin: 0 -32px 24px -32px;
  }
  @media(max-width: 767px){
    padding: 0 24px;
    > div:first-child {
      margin: 0 -24px 24px -24px;
    }
  }
`
