import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     align-items: center;
     flex-direction: column;
     >p{
       margin: 24px 0;
       max-width: 455px;
       word-wrap: break-word;
       text-align: center;
       font-size: 20px;
       font-weight: 500;
       line-height: 24px;
       color: #6A6A6A
     }

`;
export const ButtonGroup = styled.div`
     display: flex;
     align-items: center;
     > button + button{
       margin-left: 20px;
     }

`;
