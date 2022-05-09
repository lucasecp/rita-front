import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 24px;
  background: #fff;
  padding: 32px;
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`
