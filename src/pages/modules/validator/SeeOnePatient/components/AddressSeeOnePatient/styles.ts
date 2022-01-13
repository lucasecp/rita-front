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

  > div,
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 24px 32px;

    > div {
      display: flex;
      flex-direction: column;

      gap: 8px;

      line-height: 20px;

      > label {
        color: ${colors.gray.middleLight};

        font-weight: 300;
        font-size: 14px;
      }

      > p {
        color: ${colors.black};

        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  @media (max-width: 767px) {
    > div,
    section {
      grid-template-columns: 1fr;
    }
  }
`
