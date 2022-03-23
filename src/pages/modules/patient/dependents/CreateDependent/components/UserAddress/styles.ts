import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px 32px 0 32px;

  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.purple.main.dark};
  }
`

export const InputsArea = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  section {
    display: grid;
    gap: 24px;
  }

  .section1 {
    grid-template-columns: repeat(3, 1fr);
  }

  .section2 {
    grid-template-columns: repeat(3, 1fr);

    div:nth-child(1) {
      grid-column: 1 / 3;
    }
  }

  .section3 {
    grid-template-columns: repeat(2, 1fr);
  }

  /* @media (max-width: 767px) {

  } */
`
