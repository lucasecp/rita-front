import styled from 'styled-components'
import colors from '@/styles/colors'

// import { Spinner } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'

export const Container = styled(CircularProgress)`
  > svg {
    color: ${colors.blue.light};
  }
`
