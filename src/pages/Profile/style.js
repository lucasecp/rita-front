import styled, { css } from 'styled-components'
import colors from '../../styles/colors'

export const Box = styled.div`
  padding: 40px 32px;
  border-radius: 8px;
  background-color: #ffffff;
  min-height: 232px;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  > div:first-child {
    width: 194px;
    height: 168px;
    background: #eeeeee;
    border-radius: 8px;
    margin-right: 32px;
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h2,
  p {
    background: #eeeeee;
    border-radius: 8px;
    color: transparent;
    margin-bottom: 13px;
  }
  button {
    margin-top: auto;
  }
`
export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 !important;
  margin-top: 32px;
  > * {
    padding: 0 15px;
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
