import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 40px 32px 48px;

  @media (max-width: 767px) {
    padding: 32px;
    > div {
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
      > div {
        margin: 0 0 24px 0;
        width: 100%;
      }
    }
    > h6 {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media (max-width: 539px) {
    div > button {
      width: 100%;
    }
  }
`
export const TitleAndLogo = styled.div`
  display: flex;
  grid-template-columns: '1fr 100px';
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

export const TextAreaAndErrorMessage = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;

  small {
    margin-right: auto;
    display: flex;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    p {
      margin-left: auto;
      color: ${colors.orange.middleDark};
      font-family: Athletics;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      color: #afafaf;
    }
  }
`

export const ButtonArea = styled.div`
  display: flex;
  background-color: ${colors.gray.dark};

  button {
    margin: auto;
  }
`
