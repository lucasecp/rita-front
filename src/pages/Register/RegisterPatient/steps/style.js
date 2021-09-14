import styled from 'styled-components';

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
  .MuiAccordion-root::before{
   display: none;
  }
`;
