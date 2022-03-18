import colors from '@/styles/colors'

import styled from 'styled-components'

export const ContainerRadio = styled.div`
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${colors.purple.main.dark};

    :hover {
      background: ${colors.purple.main.light};
    }
  }

  .MuiRadio-colorSecondary.Mui-disabled {
    color: ${colors.gray.middle};
    opacity: 0.5;
  }

  .MuiRadio-root {
    color: #979797;

    .Mui-checked {
      color: ${colors.purple.main.dark};
    }

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

    color: ${({ checked }) =>
      checked ? colors.purple.main.dark : colors.gray.dark};
    margin-left: ${({ label }) => (label ? 2 : 0)}px;
  }
  .MuiTypography-body1.Mui-disabled {
    color: ${colors.gray.middleLight};
  }
`
