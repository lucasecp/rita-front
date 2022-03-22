import styled from 'styled-components'

export const Container = styled.div`
  > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: #6a6a6a;
    margin-bottom: 32px;
  }
  > footer {
    margin: 0 -32px;
    border-radius: 0 0 8px 8px;
  }
  @media (max-width: 767px) {
    > footer {
      margin: 0 -24px !important;
    }
  }
  > main {
    > * + * {
      margin-top: 32px;
    }
    >*:last-child{
      margin-bottom: 32px;
    }
  }
`
