import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > p {
    padding: 0 32px;

    margin-bottom: 12px;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.dark};
  }

  > small {
    padding: 0 32px;

    display: block;
    margin-bottom: 24px;

    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: ${colors.orange.middle};
  }

  > div {
    overflow-x: auto;
    width: 100%;

    > div {
      width: 100%;

      > ul {
        background: ${colors.white};
        padding: 24px 32px;

        display: flex;

        min-width: -webkit-fill-available;
        width: max-content;

        gap: 24px;
        border: solid 1px ${colors.gray.middleLight};

        > li {
          width: 120px;

          font-weight: 500;
          font-size: 14px;
          line-height: 17px;

          color: ${colors.gray.dark};
        }
      }
    }
  }

  > h4 {
    padding: 32px;

    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};

    background: ${colors.white};
    text-align: center;
  }
`
