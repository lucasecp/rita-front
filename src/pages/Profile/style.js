import styled, { css } from 'styled-components'

export const Box = styled.div`
  padding: 40px 32px;
  border-radius: 8px;
  background-color: #ffffff;
  max-height: 232px;
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'img content' 'img content' 'img btn';
  justify-content: start;
  align-items: start;


  > div:first-child {
    max-width: 194px;
    max-height: 168px;
    height: 100%;
    background: #eeeeee;
    border-radius: 8px;
    margin-right: 32px;
    grid-area: img;
  }
  > div:last-child {
    grid-area: content;
  }
  h2{
    margin-bottom: 20px;
  }
  h2,
  p {
    height: 20px;
    background: #eeeeee;
    border-radius: 8px;
    color: transparent;
  }
  button {
    grid-area: btn;
  }

  @media(max-width:767px){
    grid-template-areas: 'img content' 'img content' 'btn btn';
    grid-template-rows: 50px 50px auto;

    > div {
    margin-right: 20px;
  }

  button{
    margin-top: 20px;
  }
  }
`
export const TemplateBox = styled.div`
  padding: 32px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px #DFD2FF26;
  border-radius: 8px;
  ${props => props.transparent && css`
    background: transparent;
    padding: 0 !important;
  `};
  @media(max-width: 767px){
    padding: 24px 25px;
  }
`
export const Card = styled.div`
  padding: 18px 24px;
  border-radius: 8px;
  min-height: 180px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > * {
    z-index: 9999;
  }
  h3 {
    font-size: 24px;
    line-height: 29px;
    color: #f8f5ff;
    font-weight: 700;
  }
  p {
    max-width: 309px;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-top: 14px;
    color: #f8f5ff;
  }
  button {
    margin-top: 20px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1 !important;
    opacity: 0.3;
    width:100%
  }
  ${(props) =>
    props.variation === 'light-blue' &&
    css`
      background-color: #c5dbfe;
      h3,
      p {
        color: #1c23bd;
      }
      > img {
        filter: invert(87%) sepia(48%) saturate(1732%) hue-rotate(179deg)
          brightness(105%) contrast(98%);
      }
    `}
  ${(props) =>
    props.variation === 'dark-blue' &&
    css`
      background-color: #706BFF;
      h3{
        color:#ACFFC5
      }
      p{
        color: #C5DBFE;
      }
      > img{
        filter: invert(17%) sepia(78%) saturate(5493%) hue-rotate(236deg) brightness(75%) contrast(95%);
         right:350px;
        `}
        ${(props) =>
    props.variation === 'red' &&
    css`
      background-color: #DF644B;
      > img{
        filter: invert(73%) sepia(63%) saturate(6762%) hue-rotate(330deg) brightness(85%) contrast(89%);        left: -10%;
        left: -10%;
        top:-30%;
        width:200px;
        opacity: .9;
    `}
`
