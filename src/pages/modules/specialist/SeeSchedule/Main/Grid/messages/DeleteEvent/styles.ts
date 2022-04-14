import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }

  > p {
    max-width: 410px;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: ${colors.gray.dark};
  }

  // Insert Token
  > h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    text-align: center;

    color: ${colors.gray.dark};

    max-width: 670px;
    margin-bottom: 16px;
  }
  > h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    text-align: center;

    color: ${colors.orange.middle};

    margin-bottom: 16px;
  }
  > h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 150%;
    text-align: center;

    color: ${colors.gray.dark};

    margin-bottom: 8px;
  }
  > small {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${colors.orange.middle};

    margin-top: 8px;
    margin-bottom: 16px;
  }

  > footer {
    display: flex;
    margin-top: 24px;

    > button + button {
      margin-left: 24px;
    }
  }

  > p {
    > a {
      display: inline-flex;
      text-decoration: underline;

      margin-left: 8px;

      > img {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 478px) {
    > footer {
      flex-direction: column;
      width: 100%;

      margin-top: 24px;

      > button + button {
        margin-left: 0px;
        margin-top: 8px;
      }
    }
  }
`
export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  > button + button {
    margin-left: 20px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    width: 100%;
    button + button {
      margin-top: 20px;
      margin-left: 0;
    }
    button {
      width: 100%;
    }
  }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    > p:nth-child(1) {
      font-size: 20px;
      color: ${colors.purple.main.dark};
      margin-top: 20px;
    }
    > p:nth-child(2) {
      font-size: 20px;
      color: ${colors.gray.dark};
      position: relative;
      bottom: 10px;
    }
    > p:nth-child(3) {
      font-size: 20px;
      margin-top: 8px;
      color: #6A6A6A;
    }
    > p:nth-child(4) {
      font-size: 16px;
      color: #6A6A6A;
      position: relative;
      bottom: 9px;
    }
`
