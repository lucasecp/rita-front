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
  transition: .3s;
  ${props=> props.variation === 'white' && css`
   color: #fff;
   border: solid 2px #fff;
   padding: 10px 16px !important;
   :hover{
     background: #fff !important;
     color: ${colors.text.link} !important
    }
    `}
    ${props=> props.variation === 'green' && css`
    color: ${colors.feedback.activeLinkSpan};
    padding: 10px 16px !important;
    border: solid 2px ${colors.feedback.activeLinkSpan};
    :hover{
      color: ${colors.green.light} !important;
      background:  ${colors.feedback.activeLinkSpan} !important;
    }
    `}
    ${props=> props.variation === 'blue' && css`
    color: ${colors.blue.light};
    padding: 10px 16px !important;
    border-color:${colors.blue.light} !important;
   :hover{
     background: ${colors.blue.light} !important;
   }
  `}
  :hover {
    background-color:#7338cb;
    transition: .3s;
    color: #fff;
    border-color:  #7338cb;
  }

`;

