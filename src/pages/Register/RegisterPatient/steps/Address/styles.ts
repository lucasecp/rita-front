import ButtonPrimary from '@/components/Button/Primary'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${colors.white};
  padding: 32px;
  width: 100%;

  > h1 {
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;

    color: ${colors.gray.dark};
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`
export const BtnTerms = styled.button`
  background-color: transparent;
  color: blue;
  text-decoration: underline;
  border: none;
  padding: 0;
  margin: 0 3px;
`

export const BtnGroup = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  align-self: stretch;

  > button:last-child {
    margin-left: auto;
  }

  @media (max-width: 539px) {
    flex-direction: column;
    > button:last-child {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

export const CustomBtn = styled(ButtonPrimary)`
  margin-left: auto;
`

export const BtnPrev = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #9146ff;
  background-color: transparent;
  border: none;
  text-decoration: underline;
`
