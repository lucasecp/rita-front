import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.section`
  > h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;

    color: #6a6a6a;

    margin-bottom: 24px;
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 24px;

    margin-top: 24px;
    > div.static-field,
    div.has-three-in-row div {
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

  @media (max-width: 991px) {
    > section {
      grid-template-columns: 1fr;

      gap: 16px;

      margin-top: 16px;
    }
  }
`
