import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0 0;
  box-shadow: 0px 2px 8px 0px #dfd2ff26;
  background: ${colors.gray.extraLight};
  margin: 20px 0px 100px 0;
  border-radius: 8px;
  position: relative;
`

// export const BtnGroup = styled.div`
//   background: ${colors.gray.extraLight};
//   padding: 24px 32px;
//   display: flex;
//   align-items: center;
//   align-self: stretch;

//   > button:last-child {
//     margin-left: auto;
//   }

//   @media (max-width: 539px) {
//     flex-direction: column;
//     > button:last-child {
//       margin-left: 0;
//       margin-top: 20px;
//     }
//   }
// `
// export const BtnPrev = styled.button`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 20px;
//   text-align: center;
//   color: #9146ff;
//   background-color: transparent;
//   border: none;
//   text-decoration: underline;
// `
