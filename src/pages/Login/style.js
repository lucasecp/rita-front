import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.form`
  /* background: ${hexToRgba(colors.white, 0.8)}; */
  /* box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15); */
  /* padding: 38px 32px 24px; */
  /* width: 60%; */
  box-shadow: 0px 2px 8px 0px #00000026;
  background: #fffffff2;
  border-radius: 8px;
  padding: 51px 30px 30px;
  max-width: 458px;
  margin: auto;

  > span,
  > span + div {
    /* font-family: Athletics;
    font-style: normal; */
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
    text-align: center;
  }
  > span + div {
    position: relative;
    margin-top: 28px;
    ::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background: #afafaf;
      position: absolute;
      top: -28px;
      left: 0;
    }
  }
  .MuiTypography-body1 {
    color: #afafaf;
    :hover {
      color: #0007;
    }
  }
  a,
  > span {
    text-decoration: underline;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;
  }
  > span {
    margin-top: 25px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    cursor: default;
    a {
      color: #afafaf;
      :hover {
        color: #0007;
      }
    }
  }
  > div a {
    margin-left: 2px;
  }

  > button {
    width: 100%;
    margin-top: 13px;
  }
  .MuiFormControlLabel-root {
    margin-top: -7px;
  }

  > div p {
    margin-bottom: 15px;
  }

  @media (max-width: 767px) {
    padding: 51px 24px 24px;
  }
  div + p {
    margin-bottom: 24px;
    margin-top: 6px;
  }
  div + div {
    margin-top: 24px;
  }
`
