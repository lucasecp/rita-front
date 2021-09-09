import colors from '@/styles/colors'

import styled from 'styled-components'

export const ContainerRadio = styled.div`
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${colors.secondary};

    :hover {
      background: ${colors.purple.main.light};
    }
  }

  .MuiRadio-root {
    color: ${colors.secondary};

    :hover {
      background: ${colors.purple.main.light};
    }
  }
`

export const ContainerLabel = styled.div`
  .MuiTypography-body1 {
    font-family: Athletics;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: ${({ checked }) => (checked ? colors.secondary : colors.gray.dark)};
    margin-left: ${({ label }) => (label ? 8 : 0)}px;
  }
`
