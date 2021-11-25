import colors from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  >div:first-child{
     display: grid;
     grid-template-columns: repeat(4,minmax(auto,25%));
     gap: 24px;
     @media (max-width: 1200px){
       grid-template-columns: repeat(3,minmax(auto,33.3%));
     }
     @media (max-width: 991px){
       grid-template-columns: repeat(2,minmax(auto, 50%));
     }
     @media (max-width: 767px){
       grid-template-columns: 100%
     }
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
