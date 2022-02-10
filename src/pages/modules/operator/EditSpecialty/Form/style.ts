import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 24px;
  @media (max-width: 991px) {
    grid-template-columns: 100%;
  }
`
