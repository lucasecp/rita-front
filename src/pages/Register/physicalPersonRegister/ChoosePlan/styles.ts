import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px 8px 0 0;
  padding: 40px 32px 48px;
`
export const TitleAndLogo = styled.div`
  h6 {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.purple.main.dark};
    margin-bottom: 16px;
  }
  h2 {
    font-weight: 500;
    font-size: 22px;
    color: ${colors.gray.middle};
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

export const CardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-content: space-between;
  gap: 24px;
  margin: 32px 0;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  gap: auto;
  background-color: ${colors.gray.extraLight};
  border-radius: 0 0 8px 8px;
  padding: 32px;
  margin-bottom: 40px;

  @media (max-width: 950px) {
    span {
      display: none;
    }
  }

  span {
    margin: auto;
    text-align: center;
    font-size: auto;
    color: ${colors.purple.main.dark};
    font-weight: 500;
  }
`
