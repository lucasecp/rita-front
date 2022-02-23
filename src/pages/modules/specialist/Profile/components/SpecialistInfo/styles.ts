import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  > [name='name'],
  [name='profissionalName'] {
    grid-column: span 2;
  }

  > h3 {
    grid-column: span 2;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    color: #6a6a6a;
  }
  @media (max-width: 767px) {
    grid-template-columns: 100%;
    > [name='name'],
    > [name='profissionalName'] {
      grid-column: 1;
    }
    > h3 {
      grid-column: 1;
    }
  }
`
