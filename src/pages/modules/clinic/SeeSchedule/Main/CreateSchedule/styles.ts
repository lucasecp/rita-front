import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 100px) 1fr auto auto;
  align-items: start;
  padding: 32px;
  justify-content: start;
  /* >*:nth-child(1),>*:nth-child(1){

      grid-column: repeat(5, 1fr);
    } */
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 100px) 1fr;
    > *:nth-child(4) {
      grid-column: span 2;
    }
    > *:nth-child(5) {
      grid-column: 3;
      max-width: auto;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    padding: 24px;
    > *:nth-child(4) {
      grid-column: span 1;
    }
    > *:nth-child(5) {
      grid-column: 1;
    }
  }
`
