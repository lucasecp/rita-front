import styled from 'styled-components'
import ButtonPrimary from '@/components/Button/Primary'

export const BtnTerms = styled.button`
  background-color: transparent;
  color: blue;
  text-decoration: underline;
  border: none;
  padding: 0;
  margin: 0 3px;
`

export const BtnGroup = styled.div`
  margin-top: 24px;
  padding: 0 32px;
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
