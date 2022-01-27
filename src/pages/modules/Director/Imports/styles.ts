import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px 8px 0 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  > div {
    width: 100%;

    > label {
      color: ${colors.gray.middle};
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
  }
`

export const BtnGroup = styled.div`
  background: ${colors.gray.extraLight};
  padding: 24px 32px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* > button:last-child {
    margin-left: auto;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    > button:last-child {
      margin-left: 0;
      margin-top: 20px;
    }
  } */
`
export const ContentFile = styled.div`
  margin-top: 5px;

  display: grid;
  grid-template-columns: 0.7fr 0.3fr;

  > span {
    border: 1px solid ${colors.gray.light};
    padding: 14px 16px;
    border-radius: 8px 0 0 8px;

    color: ${colors.black};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  > button {
    padding: 14px 16px;
    width: 100%;
    height: 100%;
    color: #000cec;
    background: ${colors.blue.light};
    border-radius: 0 8px 8px 0;
  }
`

export const AutoComplete = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  > input {
    padding: 14px 16px;
    height: 100%;
    border: 1px solid ${colors.gray.light};
    border-radius: 8px;
  }

  > ul {
    // Posição da listagem de opções
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    right: 0;

    width: 100%;
    border: 1px solid #d4d4d4;
    background: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;

    > li {
      padding: 10px;

      &:hover {
        background: ${colors.gray.light};
      }
    }
  }
`
