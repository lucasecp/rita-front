import colors from '@/styles/colors'
import { Accordion } from '@material-ui/core'
import styled from 'styled-components'

export const AccordionContainer = styled(Accordion)`
  margin-bottom: 30px;

  > h3 {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${colors.gray.middle};
  }

  > h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    color: ${({ theme }) => theme.main};
    margin-bottom: 15px;
  }
`
