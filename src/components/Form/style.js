import styled from "styled-components"
import colors from "../../styles/colors"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 16px;
   label{
     margin-bottom: 6px;
   }

`
export const Input = styled.input`
    border: solid #DCDFE6 1px;
    color: ${colors.text.primary};
    border-radius: 4px;
    outline-color: #419EFF;
    padding: 10px 15px;
    display: inline-block;
`