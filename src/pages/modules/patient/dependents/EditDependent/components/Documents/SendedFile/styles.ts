import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > aside {
    div {
      margin-left: auto;
    }
  }

  > button {
    width: 100%;
  }

  > h4 {
    max-width: 187px;

    margin-left: 12px;
    margin-right: 12px;

    font-weight: bold;
    font-size: 16px;
    line-height: 150%;

    color: ${colors.purple.main.dark};
    word-break: break-all;
  }
`
