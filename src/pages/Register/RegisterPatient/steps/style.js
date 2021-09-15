import styled from 'styled-components'

export const Container = styled.section`
  background: #fff;
  padding: 32px;
  .MuiAccordionDetails-root {
    padding: 0;
    display: block;
  }
  .MuiAccordionSummary-root {
    padding: 0;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  .MuiAccordionSummary-content {
    flex-direction: column;
  }
  .MuiButtonBase-root {
    cursor: default !important;
  }
  .MuiAccordion-root::before {
    display: none;
  }
  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    color: #6a6a6a;
    margin-bottom: 40px;
  }
`
export const MsgError = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #df644b;
  margin-top: 6px;
`
