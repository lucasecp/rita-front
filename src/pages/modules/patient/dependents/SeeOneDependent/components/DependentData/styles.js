import styled from 'styled-components'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    color: #6A6A6A;


    margin-bottom: 24px;
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 24px;

    margin-top: 24px;
  }

  @media (max-width: 991px) {
    > section {
      grid-template-columns: 1fr;

      gap: 16px;

      margin-top: 16px;
    }
  }
`
