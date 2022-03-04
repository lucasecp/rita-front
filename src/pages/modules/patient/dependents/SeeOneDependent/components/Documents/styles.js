import styled from 'styled-components'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    margin-bottom: 24px;
    color: #6a6a6a;
  }
  > section {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: flex-end;

    input {
      height: 56px;
    }
  }

  @media (max-width: 767px) {
    > section {
      grid-template-columns: 1fr;
    }
  }
`
