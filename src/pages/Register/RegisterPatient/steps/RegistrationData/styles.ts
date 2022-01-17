import styled from 'styled-components'
import colors from '@/styles/colors'

import ButtonPrimary from '@/components/Button/Primary'

export const Container = styled.div`
  background: #fff;
  width: 100%;
  padding: 32px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: ${colors.gray.dark};
    margin-bottom: 40px;
  }

  > section {
    margin: 24px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 767px){
    > section {
      grid-template-columns: 1fr;
    }
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
