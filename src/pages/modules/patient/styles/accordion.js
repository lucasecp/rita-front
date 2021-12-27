import styled from 'styled-components'

export const Accordion = styled.div`
  max-height: 0;
  transition: 0.4s ;
  visibility: hidden;
  overflow: hidden;


  &[data-expanded='1'] {
    overflow: visible;
    max-height: 2000px;
    visibility: visible;
  }

`
