import styled, { css } from 'styled-components'
import arrowDown from '@/assets/icons/arrow-down-order.svg'
import arrowUp from '@/assets/icons/arrow-up-order.svg'
import colors from '@/styles/colors'

// export const Tr = styled.tr`
//   display: flex;
// `
// export const Th = styled.th`
//   display: flex;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 20px;
//   color:#9146FF;
//   /* background-color: ${colors.purple.main.light};
//   margin-top: -2px;
//   margin-bottom: -2px; */
//   justify-content: space-between;
//   /* padding-right: 24px; */
//   align-items: center;


//   > div {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     cursor: pointer;
//     margin-left: 55px;
//     padding: 20px;
//     height: 100%
//   }
// `
export const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color:#9146FF;
  background-color: ${colors.purple.main.light};
  margin-top: -2px;
  margin-bottom: -2px;
  justify-content: space-between;
  padding-right: 24px;
  align-items: center;


  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-left: 55px;
    padding: 20px;
    height: 100%
  }
`

export const ArrowUp = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 1.5px;
  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${arrowUp});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
  }
  ${({ order }) =>
    order &&
    css`
      filter: invert(74%) sepia(7%) saturate(4482%) hue-rotate(203deg)
        brightness(98%) contrast(107%);
    `}
`

export const ArrowDown = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-top: 1.5px;
  &:after {
    content: '';
    width: 9px;
    height: 5px;
    background-image: url(${arrowDown});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
  }
  ${({ order }) =>
    order &&
    css`
      filter: invert(74%) sepia(7%) saturate(4482%) hue-rotate(203deg)
        brightness(98%) contrast(107%);
    `}
`
