import styled from 'styled-components'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    color: #6a6a6a;

    margin-bottom: 24px;
  }
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
  }
  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 24px;

    margin-top: 24px;
    > *:nth-child(1) {
      grid-column: span 3;
    }
  }

  @media (max-width: 991px) {
    > section {
      grid-template-columns: 100%;
      > *:nth-child(1) {
        grid-column: span 1;
      }

      gap: 16px;

      margin-top: 16px;
    }
  }
`
