import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background: ${colors.white};
  width: 100%;

  padding: 32px;

  > h1 {
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;

    color: ${colors.gray.dark};
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
