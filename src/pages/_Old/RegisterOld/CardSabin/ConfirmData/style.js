import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  > form {
    background: #fff;
    padding: 32px;
    border-radius: 4px;
    box-shadow: 0 16px 48px #00000029;
    max-width: 420px;

    > img {
      position: relative;
      bottom: 130px;
      margin-bottom: -110px;
      margin-left: auto;
      margin-right: auto;
    }
    > label {
      margin-bottom: 16px;
    }
    label {
      /* color: ${colors.text.primary}; */
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      + a {
        margin-top: 28px;
        display: inline-block;
      }
    }
    > h3 {
      /* color: ${colors.text.primary}; */
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      margin-bottom: 16px;
    }
    [arial-expanded='false'] > input {
      display: none;
    }
  }
  @media (max-width: 767px) {
    > form {
      width: 100%;
    }
  }
`
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > :first-child {
    color: #431b99;
    font-size: 12px;
    line-height: 16px;
    font-weight: $fontBolder;
    margin-right: 5px;
  }
`
