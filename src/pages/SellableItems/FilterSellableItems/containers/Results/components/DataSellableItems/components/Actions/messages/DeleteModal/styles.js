import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    > img {
      margin: 24px auto;
      color: ${colors.purple.main.dark};
    }
    > h1,
    h2 {
      color: ${colors.gray.middle};
      text-align: center;
      margin: 24px auto;
    }
    > button {
      margin-top: 24px;
    }
    > p {
      max-width: 455px;
      word-wrap: break-word;
      text-align: center;
      line-height: 24px;
      color: ${colors.gray.dark};
    }
  }
`

export const PlanName = styled.p`
  color: ${colors.purple.main.dark}!important;
`

export const Price = styled.p`
  background-color: ${colors.purple.main.dark}!important;
  color: white !important;
  border-radius: 16px;
  padding: 4px 8px;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
`

export const ButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 24px;

  > a {
    position: relative;
    padding: 14px 32px;
    cursor: pointer;
    font-weight: 400;
    color: ${colors.white};
    font-size: 16px;
    background: ${colors.purple.main.dark};
    transition: 0.3s;
    border-radius: 8px;
    line-height: 20px;
    border: 2px solid ${colors.purple.main.dark};
    height: fit-content;
    :hover {
      background-color: ${colors.purple.main.darkness};
      color: #fff;
      border-color: ${colors.purple.main.darkness};
    }
  }

  @media (max-width: 539px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`
