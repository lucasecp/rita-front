import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  padding: 24px 32px 0;

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`
