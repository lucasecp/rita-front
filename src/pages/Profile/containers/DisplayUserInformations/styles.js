import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background-color: ${colors.purple.background.light};

  padding: 112px 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
    margin-top: 24px;
  }

  > div {
    margin-top: 24px;
    text-align: center;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.middle};

    > span {
      margin-top: 4px;
      display: block;

      font-weight: 700;
      color: ${colors.gray.dark};
    }
  }

  > section {
    margin-top: 24px;
    text-align: center;

    display: flex;
    align-items: center;

    > img {
      margin-right: 24px;
    }

    > div {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      color: ${colors.gray.middle};

      > span {
        display: block;
        font-weight: 700;
        color: ${colors.purple.main.dark};
      }
    }
  }

  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`
