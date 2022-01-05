import styled, { css } from 'styled-components'
import { ReactComponent as InactiveIcon } from '@/assets/icons/inactive.svg'

interface ContainerProps {
  hidden: boolean
}

const InactivateIcon = styled(InactiveIcon)<ContainerProps>`
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`
export default InactivateIcon
