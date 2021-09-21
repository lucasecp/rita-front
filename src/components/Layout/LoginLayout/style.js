import styled from 'styled-components'
import shape from '@/assets/img/element3.png'

export const Container = styled.div`
  /* display: grid; */
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient( 148.19deg, #9146ff -15.68%, #8f46fe -3.23%, rgba(136,70,252,0.992703) 43.97%, #1c23bd 119.58% );

 ::after{
   content:'';
   background-image: url(${shape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    width: 100%;
    min-height: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    opacity: 0.6;
 }
  > *{
    padding: 0 24px;
  }
  *{
    z-index: 1
  }

  > aside img {
    margin: 0 auto;
    padding-bottom: 46px;
    filter: invert(96%) sepia(95%) saturate(26%) hue-rotate(10deg) brightness(205%) contrast(100%);
  }


  /* @media (max-width: 1180px) {
    grid-template-columns: 3fr;
  } */
  /*
  @media (max-width: 1065px) {
    > main {
      padding-left: 40px;
      padding-right: 40px;
    }
  } */

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    background-size: cover;
  }
  /* > section {
    > footer {
      margin-top: 32px;
    }
  } */
  > main{
    justify-self: stretch;
  }
  > main section >footer {
      padding-top: 40px ;
     h6, div{
       color: #ffff
     }
     img{
      filter: invert(96%) sepia(95%) saturate(26%) hue-rotate(10deg) brightness(205%) contrast(100%);
     }
    }


`
