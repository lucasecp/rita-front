import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding-top: 16px;

  > header {
    margin-bottom: 8px;

    > div {
      width: 300px;
    }
  }

  > h6 {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;

    color: ${colors.orange.middleDark};
    margin-bottom: 16px;
  }

  > p {
    background: ${colors.gray.light};
    border-radius: 8px;

    padding: 12px 16px;
    margin-bottom: 32px;

    display: flex;
    align-items: center;

    > svg {
      height: 32px;
      color: ${colors.blue.light};
    }

    > small {
      font-weight: 500;
      font-size: 12px;
      line-height: 120%;

      color: ${colors.gray.dark};
      margin-left: 12px;

      > a {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 500px) {
    > header {
      display: flex;

      > div {
        flex: 1;
      }
    }
  }
`
