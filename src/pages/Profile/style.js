import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

export const BootstrapBox = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px 0px #DFD2FF26;
  padding:40px 25px;
  border-radius: 8px;
  margin: 0 15px;
`
export const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   button:first-child{
     margin-right: 10px;
   }
   button:last-child{
     margin-left: 10px;
   }

`
export const Box = styled.div`
  padding:40px 37px;
  border-radius: 8px;
  background-color: #FFFFFF;
  min-height:232px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

   > div:first-child{
     width: 194px;
     height: 168px;
     background: #EEEEEE;
     border-radius: 8px;
    }
   > div:last-child{
    }
    h2, p{
     background: #EEEEEE;
     border-radius: 8px;
     color: transparent;
     margin-bottom: 13px;
   }
   button{
     margin-top:auto

   }
`
export const Card = styled.div`
  padding: 18px 24px;
  border-radius: 8px;
  min-height:180px;
  h3 {
    font-size: 24px;
    line-height: 29px;
    color: #F8F5FF
  }
  p {
    max-width: 309px;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-top: 14px;
    color: #F8F5FF;
  }
  button {
    margin-top: 20px;
  }
  ${(props) =>
    props.variation === 'light-blue' &&
    css`
      background: #c5dbfe;
    `}
  ${(props) =>
    props.variation === 'dark-blue' &&
    css`
      background: #706BFF;
    `}
  ${(props) =>
    props.variation === 'red' &&
    css`
      background: #DF644B;
    `}
`
