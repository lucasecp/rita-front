import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }
`
export const Input = styled.input`
  color: #6a6a6a;
  border-radius: 4px;
  padding: 10px 15px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
  border: 1px solid #eeeeee;
  box-shadow: 0px 2px 4px 0px #e5e5e5;
  font-weight: 500;

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
  ::placeholder {
    color: #6a6a6a;
  }
`
