import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Container = styled.div`
  display: grid;
  margin-bottom: 16px;
  label {
    margin-bottom: 6px;
    color: ${colors.text.primary};
    grid-area: 1/1;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }
  + div {
    margin-top: 16px;
  }
`
export const Input = styled.input`
    border: solid #DCDFE6 1px;
    color: ${colors.text.primary};
    border-radius: 4px;
    outline-color: #419EFF;
    padding: 10px 15px;
    display: inline-block;
    font-size: 14px;
    grid-area: 2/1;
    padding: 10px 30px 10px 15px;
`

export const BtnEye = styled.button`
  grid-area: 2/1;
  justify-self: end;
  align-self: center;
  cursor: pointer;
  margin-right: 8px;
  background: transparent;
  border: none;
  > img {
    width: 17px;
  }
`
