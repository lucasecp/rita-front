import styled from 'styled-components'
import colors from '../../../styles/colors'
export const Container = styled.button`
  position: relative;
  padding: 14px 32px;
  cursor: pointer;
  font-weight: 400;
  color: #fff;
  font-size: 16px;
  background: ${colors.secondary};
  transition: 0.3s;
  border-radius: 8px;
  line-height: 20px;
  border: none;
  height: fit-content;

  :hover {
    background-color: #7338cb;
    transition: 0.3s;
  }
`
