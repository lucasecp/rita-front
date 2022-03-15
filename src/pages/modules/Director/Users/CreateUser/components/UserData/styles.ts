import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 32px 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TwoFieldsInRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
