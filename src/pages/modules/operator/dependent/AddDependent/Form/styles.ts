import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 32px 0 32px;
  background: #fff;
  border-radius: 8px 8px;
  > *:nth-child(2) {
    margin-bottom: 17px;
  }
  > h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    color: #6a6a6a;
    margin-bottom: 32px;
  }
  > footer {
    display: flex;
    justify-content: center;
    padding: 24px;
    background: #eeeeee;
    margin: 24px -32px 24px -32px;
    border-radius: 0 0 8px 8px;
    > * + * {
      margin-left: 24px;
    }
  }
  @media (max-width: 767px) {
    padding: 24px 24px 0 24px;
  }
  @media (max-width: 539px) {
    > footer {
      flex-direction: column;
      margin: 24px -24px 24px -24px;
      > * + * {
        margin: 24px 0 0 0;
      }
    }
  }
`
