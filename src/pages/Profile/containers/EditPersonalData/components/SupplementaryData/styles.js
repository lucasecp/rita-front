import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.blueViola.middle};

    margin-bottom: 24px;
  }

  > h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.dark};

    margin-bottom: 24px;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    > div {
      font-size: 16px;
      line-height: 20px;

      color: ${colors.blueViola.dark};

      > p {
        margin-top: 8px;

        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        color: ${colors.gray.dark};
      }
    }
  }
`
