import styled from 'styled-components'

export const Container = styled.section`
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    color: #6a6a6a;
    margin: 24px 0px;
  }
  > section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    > section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      @media (max-width: 765px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
`
