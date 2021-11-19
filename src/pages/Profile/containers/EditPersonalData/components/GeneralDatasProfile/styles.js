import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.blueViola.middle};

    margin-bottom: 24px;
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 24px;

    margin-top: 24px;
  }

  @media (max-width: 767px) {
    > section {
      grid-template-columns: 1fr;

      gap: 16px;

      margin-top: 16px;
    }
  }
`
