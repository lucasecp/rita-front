import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

// import { Spinner } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'

export const Container = styled.div`
  /* border-color: ${colors.blue.light};
  border-right-color: transparent;

  animation-duration: 1s; */
  ${(props) =>
    props.variation &&
    css`
      svg {
        color: #C0A6FF!important;
      }

      `}

  svg {
    color: ${colors.blue.light};
  }
`
