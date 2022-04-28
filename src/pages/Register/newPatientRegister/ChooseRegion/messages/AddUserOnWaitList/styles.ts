import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 8px 8px 0 0;

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.gray.dark};
    margin: 24px none;
  }

  > footer {
    padding: 24px 0 0 0;
    border-radius: 0 0 8px 8px;
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
  grid-template-columns: '80px 1fr';
  align-items: left;
  margin: 16px 0;
  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: ${colors.purple.main.dark};
    margin: auto 0;
    text-align: left;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  @media (min-width: 767px) {
    > img {
      width: 80px;
      height: 55.73px;
    }
  }
  @media (max-width: 767px) {
    > img {
      display: none;
    }
  }
`

export const Message = styled.div`
  margin: 32px 0;

  > h2 {
    color: ${colors.gray.dark};
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
`

export const InputFields = styled.div`
  display: grid;
  gap: 24px;
`

