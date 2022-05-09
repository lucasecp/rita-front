import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > svg {
    height: 57px;
    color: ${colors.orange.middle};
    margin-bottom: 24px;
  }

  > h3 {
    font-size: 24px;
    font-weight: 400;
    color: ${colors.gray.dark};
  }

  > p {
    font-size: 20px;
    line-height: 24px;
    color: ${colors.gray.dark};
    word-wrap: break-word;
    text-align: center;

    max-width: 455px;
    margin-top: 20px;

    svg {
      height: 12px;
      vertical-align: text-top;
    }

    small {
      font-size: 0.8em;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 18px 24px;

  margin-top: 24px;
  white-space: nowrap;

  > a > button {
    width: 100%;
  }

  @media (max-width: 539px) {
    flex-direction: column;
    width: 100%;

    > * {
      width: 100%;
    }
  }
`
