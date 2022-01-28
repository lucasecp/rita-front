import React, { useRef } from 'react'
import { Accordion } from './styles'

interface AccordionProps {
  expanded: boolean
  hasChildren?: boolean
}

const Index: React.FC<AccordionProps> = ({
  children,
  expanded,
  hasChildren,
  ...rest
}) => {
  const AccordionElement = useRef<HTMLDivElement>(null)
  const childrensAccordion = AccordionElement.current?.childNodes || []

  const totalHeight = Array.from(childrensAccordion).reduce(
    (ac, child: any) => {
      ac += child.offsetHeight
      return ac
    },
    0,
  )
  const height = hasChildren ? totalHeight + totalHeight : totalHeight

  return (
    <Accordion
      ref={AccordionElement}
      expanded={expanded}
      height={height}
      {...rest}
    >
      {children}
    </Accordion>
  )
}

export default Index
