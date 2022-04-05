import styled  from 'styled-components'

export const Container = styled.section`
   h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    color: #6A6A6A;
    margin: 24px 0px;
   }
   section:nth-child(2) {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 24px;
     margin-top: 20px;
     @media (max-width: 765px){
      display: flex;
      flex-direction: column;
    }
   }
   section:nth-child(3) {
     display: grid;
     grid-template-columns: 2fr 1fr;
     gap: 24px;
     margin-top: 20px;
     div:nth-child(1){
       margin-right: -8px;
     }
     div:nth-child(2){
       margin-left: 10px;
     }
     @media (max-width: 765px){
      display: flex;
      flex-direction: column;
      div:nth-child(2){
       margin-left: 0;
     }
    }
   }
   section:nth-child(4) {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 24px;
     margin-top: 20px;
     @media (max-width: 765px){
      display: flex;
      flex-direction: column;
    }
   }

 `
