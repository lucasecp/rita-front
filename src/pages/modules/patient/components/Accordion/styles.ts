import styled, { css } from 'styled-components'

interface AccordionProps {
  expanded: boolean
  height: number
}

export const Accordion = styled.div<AccordionProps>`
  max-height: 0px;
  transition: 0.4s;
  visibility: hidden;
  overflow: hidden;

  ${({ expanded, height }) =>
    expanded &&
    css`
      overflow: visible;
      max-height: ${height}px;
      visibility: visible;
    `}
`
