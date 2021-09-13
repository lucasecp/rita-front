import styled, { css } from 'styled-components'
import colors from '../../../styles/colors'

export const Container = styled.section`
  height: 100vh;
  background-color: ${colors.gray.extraLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    max-width: 324px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 16px 48px #00000029;
    padding: 32px;
    > h2 {
      /* color: ${colors.text.primary}; */
      font-size: 26px;
      text-align: center;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 16px;
    }
    > button {
      margin: 0 auto;
      letter-spacing: 0.5px;
      position: relative;
      line-height: 16px;
    }
    > h3 {
      max-width: 260px;
      /* color: ${colors.text.primary}; */
      font-size: 14px;
      margin-bottom: 18px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`
export const Mandatory = styled.ul`
  margin: 16px 0;
`

export const MandatoryItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 2px;
    font-weight: 400;
    ${(props) =>
      props.type === 'error' &&
      css`
        /* color: ${colors.feedback.error}; */
      `}
    ${(props) =>
      props.type === 'success' &&
      css`
        /* color: ${colors.feedback.success}; */
      `}
    ::before {
      content: 'x';
      display: inline-block;
      font-size: 12px;
      margin-right: 5px;
    }
  }
  `

export const ContentModal = styled.div`
  h3 {
    font-size: 18px;
    line-height: 24px;
    margin-top: 12px;
    font-weight: 400;
  }
  ul {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    justify-content: space-around;
    gap: 5px;
    li {
      /* color: ${colors.feedback.error}; */
      font-size: 16px;
      display: flex;
      align-items: center;

      ::before {
        content: 'x';
        display: inline-block;
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
`
