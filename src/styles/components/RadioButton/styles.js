import colors from '@/styles/colors'

import styled from 'styled-components'

export const ContainerRadio = styled.div`
  .MuiRadio-colorSecondary.Mui-checked {
    color: ${({ theme }) => theme.main};

    :hover {
      background: ${({ theme }) => theme.mediumLight};
    }
  }

  .MuiRadio-colorSecondary.Mui-disabled {
    color: ${colors.gray.middle};
    opacity: 0.5;
  }

  .MuiRadio-root {
    color: #979797;

    .Mui-checked {
      color: ${({ theme }) => theme.main};
    }

    :hover {
      background: ${({ theme }) => theme.mediumLight};
    }
  }
`

export const ContainerLabel = styled.div`
  .MuiTypography-body1 {
    font-family: Athletics;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: ${({ checked, theme }) => (checked ? theme.main : colors.gray.dark)};
    margin-left: ${({ label }) => (label ? 2 : 0)}px;
  }
  .MuiTypography-body1.Mui-disabled {
    color: ${colors.gray.middleLight};
  }
`
