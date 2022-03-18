import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding-top: 24px;

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};

    margin-bottom: 24px;
  }

  // no > before tag section
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    > *:nth-child(4) {
      grid-column: span 2;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      > *:nth-child(4) {
        grid-column: 1;
      }
    }
  }
`
