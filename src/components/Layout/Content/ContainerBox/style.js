import styled, { css } from 'styled-components'
import { Container } from 'react-bootstrap'

export const ContainerBootstrap = styled(Container)`
margin-top: 15px;

`
export const BoxContainer = styled.div`
    box-shadow: 0px 2px 8px 0px #DFD2FF26;
    border-radius: 8px;
    margin: 0 17px;
    ${props => props.wide ? css`
    padding:40px 32px;
    background-color: #FFFFFF;
    `: css`
    background-color: transparent;
  `}

`
