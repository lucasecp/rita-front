import styled, { css } from 'styled-components'

export const BoxContainer = styled.div`
    box-shadow: 0px 2px 8px 0px #DFD2FF26;
    border-radius: 8px;
    margin:  17px;
    ${props => props.wide ? css`
    padding:40px 32px;
    background-color: #FFFFFF;
    @media(max-width:767px){
      padding:35px 25px;
      margin: 0 10px;
    }
    `: css`
    background-color: transparent;
    @media(max-width:767px){
      margin: 0 10px;
    }
  `}
`
