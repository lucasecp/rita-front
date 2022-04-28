import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 8px 8px 0 0;

  > h2 {
    padding: 26px 32px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
  }

  > footer {
    padding: 26px 32px;
    border-radius: 0 0 8px 8px;
    background-color: ${colors.gray.light};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    @media (max-width: 767px) {
      flex-direction: column;

      * {
        width: 100%;
      }
    }
  }
`

export const TitleAndLogo = styled.div`
  display: flex;
  grid-template-columns: '100px 1fr';
  gap: 95px;
  h6 {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.purple.main.dark};
    margin-bottom: 48px;
  }
  @media (min-width: 767px) {
    > img {
      width: 100px;
      height: 69.66px;
    }
  }
  @media (max-width: 767px) {
    > img {
      display: none;
    }
  }
`
