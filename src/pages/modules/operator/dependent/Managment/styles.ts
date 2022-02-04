import styled from 'styled-components'

export const Content = styled.div`
  overflow: hidden;
  padding: 24px 32px 0 32px;
  background: #fff;
  border-radius: 8px;
  > footer {
    display: flex;
    justify-content: center;
    > * + * {
      margin-left: 24px;
    }
    @media (max-width: 539px) {
      flex-direction: column;
      > * + * {
        margin: 24px 0 0 0;
      }
    }
  }
  > footer {
    margin: 32px -32px 0 -32px;
    padding: 26px 32px;
    background: #eeeeee;
  }
  @media (max-width: 767px) {
    padding: 25px 24px 0 24px;
    > footer {
      margin: 32px -24px 0 -24px;
      padding: 26px 24px;
    }
  }
`
