import styled from 'styled-components'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    color: #6a6a6a;
  }

  > section {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 24px;
    > *:nth-child(4) {
      grid-column: span 2;
    }
    > *:nth-child(6) {
      grid-column: span 2;
    }
  }

  @media (max-width: 991px) {
    > section {
      > *:nth-child(4) {
        grid-column: span 1;
      }
      > *:nth-child(6) {
        grid-column: span 1;
      }
      grid-template-columns: 1fr;

      gap: 16px;
    }
  }
`
