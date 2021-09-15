import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 6px;
    color: ${colors.gray.middle};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    font-weight: 400;
  }

  > input {
    color: ${colors.gray.dark};
    border-radius: 8px;
    padding: 14px 22px;
    transition: all 0.3s;
    border: 1px solid ${colors.gray.light};
    box-shadow: 0px 2px 4px 0px #e5e5e5;
    font-weight: 500;
    width: 100%;
  }
`
