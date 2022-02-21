import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 24px 32px;
  border-radius: 8px;
  > footer {
    display: flex;
    justify-content: center;
  }
  > * + * {
    margin-top: 24px;
  }
  @media (max-width: 767px) {
    padding: 24px;
  }
`
