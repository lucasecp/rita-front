import styled from 'styled-components'

export const Content = styled.div`
  padding: 40px 32px;
  background: #fff;
  border-radius: 8px;
  > footer {
    margin-top: 32px;
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
`
