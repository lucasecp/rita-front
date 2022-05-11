import colors from '@/styles/colors'
import styled from 'styled-components'

export const cardColors = {
  purple: {
    primaryColor: colors.purple.main.darkness,
    secondaryColor: colors.purple.main.light,
  },
  green: {
    primaryColor: colors.green.dark,
    secondaryColor: colors.green.light,
  },
  blue: {
    primaryColor: colors.blue.dark,
    secondaryColor: colors.blue.light,
  },
  orange: {
    primaryColor: colors.orange.middleDark,
    secondaryColor: colors.orange.light,
  },
}

export const Card = styled.div<{
  key: number
  colorTheme: number
  checked: boolean
}>`
  height: 276.11px;
  width: 100%;
  padding: 24px;
  background-color: ${({ colorTheme, checked }) =>
    checked
      ? cardColors[colorTheme].primaryColor
      : cardColors[colorTheme].secondaryColor};
  border-radius: 8px;
  border: 2px solid ${({ colorTheme }) => cardColors[colorTheme].primaryColor};

  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  > svg {
    position: absolute;
    top: 50%;
    right: 0;
    height: 150px;
    transform: translateY(-50%);
    width: 77px;

    path {
      position: absolute;
      /* top: 50%; */
      height: 150px;
      width: 77px;

      right: 0;
      fill: ${({ colorTheme, checked }) =>
        checked ? 'white' : cardColors[colorTheme].primaryColor};
    }
  }

  div {
    display: flex;
    grid-template-columns: auto 20px;
    justify-content: space-between;
    gap: auto;
    h1 {
      font-weight: 700;
      font-size: 20px;
      color: ${({ colorTheme, checked }) =>
        checked ? 'white' : cardColors[colorTheme].primaryColor};
      margin-bottom: 16px;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    color: ${({ colorTheme, checked }) =>
      checked ? 'white' : cardColors[colorTheme].primaryColor};
    margin-top: 40px;
  }

  h3 {
    font-weight: 700;
    font-size: 10px;
    color: ${({ colorTheme, checked }) =>
      checked ? 'white' : cardColors[colorTheme].primaryColor};
  }

  ul {
    margin-bottom: 16px;
    li {
      font-weight: 700;
      font-size: 10px;
      color: ${({ checked }) => (checked ? 'white' : `${colors.gray.dark}`)};
    }
  }
`

export const CheckField = styled.div<{
  checked: boolean
  colorTheme: number
}>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 2px solid
    ${({ colorTheme, checked }) =>
      checked ? 'white' : cardColors[colorTheme].primaryColor};
  > div {
    border: 2px solid transparent;
    margin: auto;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ checked }) => (checked ? 'white' : 'transparent')};
  }
`

export const LinkArea = styled.div<{
  colorTheme: number
  checked: boolean
}>`
  display: flex;

  button {
    color: ${({ colorTheme, checked }) =>
      checked ? 'white' : cardColors[colorTheme].primaryColor};
    padding: 14px 0;
    margin-left: auto;

    > span {
      color: ${({ colorTheme, checked }) =>
        checked ? 'white' : cardColors[colorTheme].primaryColor};

      > svg {
        stroke: ${({ colorTheme, checked }) =>
          checked ? 'white' : cardColors[colorTheme].primaryColor};
      }
    }
  }
`
