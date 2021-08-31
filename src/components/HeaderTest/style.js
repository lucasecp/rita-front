import styled from "styled-components";

export const HeaderLayout = styled.header`
   > nav{
     display: flex;
     align-items: center;
   }
   & a{
     color: #666666;
     font-size: 18px;
     text-decoration: underline;
     margin:20px;
     transition: .3s;
     &:hover{
       color: #444;
       transition:.3s;
     }
   }

`