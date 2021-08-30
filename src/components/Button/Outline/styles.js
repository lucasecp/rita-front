import styled, { css } from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.button`
  border: 2px solid ${colors.secondary};
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${colors.secondary};
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: .2s;
  ${props=> props.variation === 'white' && css`
   color: #fff;
   border: solid 2px #fff;
   :hover{
     background: #fff !important;
     color: #6A6A6A !important
   }
  `}
  ${props=> props.variation === 'green' && css`
  color: #ACFFC5;
  border: solid 2px #ACFFC5;
  :hover{
     color: #084C4F !important;
     background:  #ACFFC5 !important;
   }
  `}
  ${props=> props.variation === 'blue' && css`
   color: #326BF6;
   :hover{
     background: #326BF6 !important;
     border-color:#326BF6 !important
   }
  `}
  :hover {
    background-color:  ${colors.secondary};
    transition: .2s;
    color: #fff
  }

`;

