import styled from 'styled-components'
import colors from '../../../styles/colors'
export const Container = styled.button`
  position: relative;
  padding: 12px 25px;
  cursor: pointer;
  font-weight: 400;
  color: #fff;
  font-size: 16px;
  background: ${colors.secondary};
  transition: .3s;
  border-radius: 8px;
  line-height: 20px;
  border: none;
  :hover {
    background-color: #7338CB;
    transition: .3s;
  }

`
