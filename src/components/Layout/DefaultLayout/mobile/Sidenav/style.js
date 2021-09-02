import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 9999999;
  background:rgba(0,0,0,0.8);
  width:100%;
  height:100%;
  visibility:${props => props.show ? 'visible': 'hidden'};
  opacity:${props => props.show ? '1': '0'};
  transition: 0.4s;
  > nav {
    padding-top: 32px;
    position: fixed;
    right:${props => props.show ? '0': '-100%'};
    height: inherit;
    background: ${colors.background.sideBar};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: 0.4s;
  }
`
