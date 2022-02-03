import styled from 'styled-components'

import { Accordion } from '@material-ui/core'
import colors from '@/styles/colors'

export const AccordionContainer = styled(Accordion)`
  border-radius: 8px;

  h2 {
    width: 100%;

    font-weight: 700;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};
  }

  &.MuiPaper-elevation1 {
    box-shadow: 0px 2px 8px 0px #0000001a;
  }

  &::before {
    display: none;
  }

  .MuiButtonBase-root,
  .MuiAccordionSummary-root {
    padding: 16px 24px;
  }

  .MuiAccordionSummary-content,
  .MuiAccordionSummary-content.Mui-expanded {
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    gap: 24px;
  }

  .MuiPaper-elevation1 {
    box-shadow: none;
  }
`
