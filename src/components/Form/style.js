import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  label {
    margin-bottom: 6px;
    color: ${colors.text.primary};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }
`
export const Input = styled.input`
  color: ${colors.text.primary};
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  border: 1px solid #EEEEEE;
  box-shadow: 0px 2px 4px 0px #E5E5E5;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* border: 1px solid #dcdfe6; */
  }

  :focus {
    border: 1px solid #419eff;

    ::after {
      border: 1px solid #419eff;
    }
  }
`
