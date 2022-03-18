import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 24px 32px;
  background: #f5f5f5;
  gap: 24px;
  > *:last-child {
    margin: 0 0px 0 auto;

  }
  @media (max-width: 539px) {
    flex-direction: column;
  }
`
