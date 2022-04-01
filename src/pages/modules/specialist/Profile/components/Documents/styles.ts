import styled from 'styled-components'

export const Container = styled.div`
  /* > h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    color: #6a6a6a;
    margin-bottom: 24px;
  } */

  > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: end;
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
  }
  > div + section {
    margin-top: 48px;
  }
`
