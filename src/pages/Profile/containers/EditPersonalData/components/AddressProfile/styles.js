import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.blueViola.middle};
  }

  > section {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 2fr 1fr;

    gap: 24px;

    > section {
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 24px;
    }
  }

  @media (max-width: 767px) {
    > section {
      grid-template-columns: 1fr;

      gap: 16px;

      > section {
        grid-template-columns: 1fr;

        gap: 16px;
      }
    }
  }
`
