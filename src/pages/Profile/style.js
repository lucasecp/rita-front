import styled, { css } from 'styled-components'
import colors from '../../styles/colors'
import { Container } from 'react-bootstrap'

export const Box = styled(Container)`
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px 0px #DFD2FF26;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 8px;
;
`
export const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
;
`
export const Card = styled.div`
  padding: 24px;
  border-radius: 8px;
  h3 {
    font-size: 24px;
    line-height: 29px;
    color: #F8F5FF
  }
  p {
    max-width: 309px;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-top: 14px;
    color: #F8F5FF;
  }
  button {
    margin-top: 20px;
  }
  ${(props) =>
    props.variation === 'light-blue' &&
    css`
      background: #c5dbfe;
    `}
  ${(props) =>
    props.variation === 'dark-blue' &&
    css`
      background: #706BFF;
    `}
  ${(props) =>
    props.variation === 'red' &&
    css`
      background: #DF644B;
    `}
`
