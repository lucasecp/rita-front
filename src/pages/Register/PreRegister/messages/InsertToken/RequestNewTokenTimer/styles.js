import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  transition: 0.3s;

  > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${colors.blueViola.light};

    margin-top: 8px;
  }
`
