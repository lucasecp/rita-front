import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 16px;
    line-height: 20px;

    color: ${colors.gray.middle};
  }

  > textarea {
    resize: none;
    border: 2px solid ${colors.gray.light};
    border-radius: 4px;
    color: ${colors.gray.dark};
    padding: 14px 16px;
  }

  > label + textarea {
    margin-top: 4px;
  }
`
