import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  > form {
    background: #fff;
    padding: 32px;
    border-radius: $borderRadiusSmall;
    box-shadow: 0 16px 48px #00000029;
    max-width: 420px;

    > img {
      position: relative;
      bottom: 130px;
      left: calc(50% - 152px);
      margin-bottom: -110px;
    }
    label {
      color: $textColor;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 16px;
      + a{
    margin-top: 28px;
       display: inline-block;
      }
    }
    > h3{
    color: $textColor;
    font-size: 14px;
    line-height: 18px;
    font-weight: $fontRegular;
    margin-bottom: 16px;
    }

  }

  @media (max-width: 767px) {
    > form {
      width: 100%;
    }
  }
`
