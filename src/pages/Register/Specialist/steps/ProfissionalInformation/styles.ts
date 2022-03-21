import styled, { css } from 'styled-components'

export const Container = styled.div`
  > h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    color: #6a6a6a;
    margin-bottom: 32px;
  }
  > div {
    padding: 0px 0 32px 0px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    > *:nth-child(1),
    > *:nth-child(2),
    > *:nth-child(5),
    > *:nth-child(7),
    > *:nth-child(8) {
      grid-column: span 2;
    }

    @media (max-width: 767px) {
      grid-template-columns: 100%;
      > *:nth-child(1),
      > *:nth-child(2),
      > *:nth-child(5),
      > *:nth-child(7),
      > *:nth-child(8) {
        grid-column: span 1;
      }
    }
  }
  @media(max-width: 767px){
    > footer {
      margin: 0 -24px !important;
    }

  }
  > footer {
    margin: 0 -32px;
    border-radius: 0 0 8px 8px ;
  }
`
