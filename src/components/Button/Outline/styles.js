import styled, { css } from 'styled-components'
<<<<<<< HEAD
import colors from '../../../styles/colors'
=======
import colors from '@/styles/colors'
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d

export const Container = styled.button`
  border: 2px solid ${colors.secondary};
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: ${colors.secondary};
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: 0.3s;
  ${(props) =>
    props.variation === 'white' &&
    css`
      color: #fff;
      border: solid 2px #fff;
      padding: 10px 16px !important;
      :hover {
        background: #fff !important;
<<<<<<< HEAD
        color: ${colors.text.link} !important;
=======
        color: ${colors.gray.dark} !important;
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d
      }
    `}
  ${(props) =>
    props.variation === 'green' &&
    css`
<<<<<<< HEAD
      color: ${colors.feedback.activeLinkSpan};
      padding: 10px 16px !important;
      border: solid 2px ${colors.feedback.activeLinkSpan};
      :hover {
        color: ${colors.green.light} !important;
        background: ${colors.feedback.activeLinkSpan} !important;
=======
      color: ${colors.green.light};
      padding: 10px 16px !important;
      border: solid 2px ${colors.green.light};
      :hover {
        color: ${colors.green.dark} !important;
        background: ${colors.green.light} !important;
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d
      }
    `}
    ${(props) =>
    props.variation === 'blue' &&
    css`
      color: ${colors.blue.light};
      padding: 10px 16px !important;
      border-color: ${colors.blue.light} !important;
      :hover {
        background: ${colors.blue.light} !important;
      }
    `}
  :hover {
<<<<<<< HEAD
    background-color: ${colors.secondary};
    transition: 0.3s;
    color: #fff;
=======
    background-color: #7338cb;
    transition: 0.3s;
    color: #fff;
    border-color: #7338cb;
>>>>>>> fc4cffd9aec41606e8e85507c7d951477b03449d
  }
`
