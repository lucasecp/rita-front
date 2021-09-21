import styled, { css } from 'styled-components';
import colors from '@/styles/colors'
export const Container = styled.div`
    span + span{
     font-size: 16px;
     line-height: 20px;
     color: #919191;
     }
    .MuiCheckbox-colorPrimary.Mui-checked{
       color: ${colors.purple.main.dark}
     }
     .MuiTypography-body1{
       font-family: Athletics;
     }
     ${({ hasError }) =>
    hasError &&
    css`
         .MuiSvgIcon-root{
          fill: #DF644B;
     };
    `}
`;
