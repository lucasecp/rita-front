import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 32px;
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 32px 27px;
    background: #fff;
    border-radius: 8px 8px 0 0;
    > *:nth-child(3),> *:nth-child(4){
      grid-column: span 2;
    }
    > *:nth-child(4){
      margin-top: 4px
    }
`;
export const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
   padding: 25.5px 0;
   background: #EFEAFA;
   border-radius: 0px 0px 8px 8px;
   >*:first-child{
     margin-right: 24px;
   }
`;