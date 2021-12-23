import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px #DFD2FF26;
  border-radius: 8px;
  > *:not(:last-child):after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #EEEEEE;
    margin: 32px 0;

  }
  @media (max-width: 768px){
    padding: 24px
  }

`
export const ButtonGroup = styled.div`
 display: flex;
 justify-content: center;
`
