import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;

  border-radius: 8px;
  padding: 14px 16px;
  border: 1px solid ${colors.gray.light};
  font-weight: 500;
  outline: none;
  width: 100%;
  line-height: 1.25;
  height: 56px;

  > h4 {
    font-weight: bold;
    font-size: 16px;

    color: ${({ theme }) => theme.main};
  }
`
