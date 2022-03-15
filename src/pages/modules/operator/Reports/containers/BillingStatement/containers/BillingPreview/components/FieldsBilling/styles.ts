import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.header`
  display: flex;
  align-items: center;

  width: fit-content;
  background: ${colors.gray.middleLight};
  border: solid 1px ${colors.gray.middleLight};

  padding: 16px 32px;

  gap: 24px;

  > div {
    > h5 {
      width: 100px;

      font-size: 14px;
      font-weight: 700;
      line-height: 17px;

      color: ${colors.white};
    }
  }
`
