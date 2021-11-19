import colors from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
   header{
     justify-content: stretch;
     > h1{
        margin-right: 40px;
     }
     >nav{
       margin-left: auto
     }

   }
`;

export const Content = styled.div`
overflow-x: hidden;
   padding: 32px 32px 0 32px;
   background: ${colors.purple.background.light};
`;
