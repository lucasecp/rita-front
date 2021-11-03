import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding-top: 40px;

  > h2 {
    margin-bottom: 24px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
  }

  > section {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    align-items: flex-end;

    select {
      height: 56px;
    }
  }

  @media (max-width: 767px) {
    > section {
      grid-template-columns: 1fr;
    }
  }
`
