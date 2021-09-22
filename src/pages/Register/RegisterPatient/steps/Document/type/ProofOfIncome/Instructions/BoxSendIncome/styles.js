import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: ${colors.gray.dark};

    margin-bottom: 8px;
  }

  > h5 {
    margin-top: 8px;
    margin-bottom: 16px;
    color: ${colors.orange.middleDark};
  }
  > section {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 12px;
      line-height: 125%;
      color: ${colors.gray.middle};
    }
  }

  @media (max-width: 500px) {
    > div {
      width: 100%;

      > button {
        width: 100%;
      }
    }
  }
`
