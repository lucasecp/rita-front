import styled, { css } from 'styled-components'
import { Col } from 'react-bootstrap'

export const Container = styled.div`
  padding: 32px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px;
`

export const CustomCol = styled(Col)`
  order: ${({ order }) => order};
`

export const Card = styled.div`
  padding: 18px 24px;
  margin-bottom: 32px;
  border-radius: 8px;
  min-height: 185px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  > * {
    z-index: 2;
  }
  h3 {
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.extraLight};
    font-weight: 700;
  }
  p {
    max-width: 309px;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-top: 14px;
    color: ${({ theme }) => theme.extraLight};
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
    width: 100%;
    height: auto;
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
    props.variation === 'middle-blue' &&
    css`
      background-color: #9b97ff;
      > img {
        filter: invert(87%) sepia(48%) saturate(1732%) hue-rotate(179deg)
          brightness(105%) contrast(98%);
      }
    `}
  ${(props) =>
    props.variation === 'dark-blue' &&
    css`
      background-color: #706BFF;
      > img{
        filter: invert(17%) sepia(78%) saturate(5493%) hue-rotate(236deg) brightness(75%) contrast(95%);
         right:350px;
        `}
        ${(props) =>
    props.variation === 'red' &&
    css`
      background-color: #FF815E;
      > img{
        filter: invert(62%) sepia(21%) saturate(3023%) hue-rotate(321deg) brightness(99%) contrast(104%);
        left: 15%;
        top: 0%;
        width: 100%;
        opacity: .9;
        height: 100%;
    `}
`
