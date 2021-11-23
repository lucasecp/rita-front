import colors from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  >div:first-child{
     display: grid;
     grid-template-columns: repeat(4,minmax(auto,25%));
     gap: 24px;
  }
`;
export const BtnGroup = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 24px 0 -16px 0 ;
   >button:first-child{
     margin-right: 24px;
   }
`;
