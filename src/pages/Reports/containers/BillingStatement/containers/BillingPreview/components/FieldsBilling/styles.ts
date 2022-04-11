import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.header`
  display: flex;
  align-items: center;
  background: ${colors.gray.middleLight};
  border: solid 1px ${colors.gray.middleLight};

  padding: 16px 32px;

  min-width: -webkit-fill-available;
  width: max-content;

  gap: 24px;

  > h5 {
    width: 120px;

    font-size: 14px;
    font-weight: 700;
    line-height: 17px;

    color: ${colors.white};
  }
`
