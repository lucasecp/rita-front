import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: auto;
  max-height: 400px;
  max-width: 1160px;
  position: relative;
  p {
    font-size: 16px;
    line-height: 20px;
    color: #6a6a6a;
    margin-right:35px;
    +p{
      margin-top: 10px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
    color: #6a6a6a;
  }
  > button{
    color: #DFD2FF;
    border: none;
    min-width: 20px;
    background-color: transparent;
    font-size: 30px;
    position: absolute;
    right:0px;
    
  }
`
