import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.form`
  /* background: ${hexToRgba(colors.white, 0.8)}; */
  /* box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15); */
  /* padding: 38px 32px 24px; */
  /* width: 60%; */
  box-shadow: 0px 2px 8px 0px #00000026;
  background: #FFFFFFF2;
  border-radius: 8px;
  padding: 51px 30px 30px ;
  max-width: 458px;
  margin: auto;

  > a,> a + div {
    /* font-family: Athletics;
    font-style: normal; */
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
    cursor: pointer;
    display: block;
    text-align: center;

  }
  > a + div{
    position: relative;
    margin-top: 28px;
    ::before{
      content: '';
      display: inline-block;
      width: 100%;
      height: 1px;
      background: #AFAFAF;
      position: absolute;
      top:-28px;
      left: 0;
    }
  }
  .MuiTypography-body1{
    color: #afafaf;

  }
  a{
    text-decoration: underline;
    font-weight: 700;
    transition: .3s;
  }
  > a{
    margin-top: 25px;
    margin-bottom: 70px;
    :hover{
      color: #0007;
    }
  }


  > button {
    width: 100%;
    margin-top: 24px;
  }

  > div p {
    border-bottom: 1px solid #afafaf;
    padding-bottom: 20px;
    text-decoration: underline;
    margin-bottom: 15px;
  }

  @media(max-width: 767px){
   padding: 51px 24px 24px;
  }

  /* @media (max-width: 900px) {
    > footer {
      align-self: center;
    }
  } */

  /* @media (max-width: 800px) {
    padding: 32px 16px 24px;
  } */

  /* @media (max-width: 550px) {
    > footer {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  } */
`
