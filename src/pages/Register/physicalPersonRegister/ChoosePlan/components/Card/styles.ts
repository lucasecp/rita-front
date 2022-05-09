import colors from '@/styles/colors'
import styled from 'styled-components'

export const cardColors = {
  purple: {
    borderAndTitles: colors.purple.main.darkness,
    background: colors.purple.main.light,
  },
  green: {
    borderAndTitles: colors.green.dark,
    background: colors.green.light,
  },
  blue: {
    borderAndTitles: colors.blue.dark,
    background: colors.blue.light,
  },
  orange: {
    borderAndTitles: colors.orange.middleDark,
    background: colors.orange.light,
  },
}

export const Card = styled.div<{ key: number; colorThemeIndex: number }>`
  height: 276.11px;
  width: 100%;
  padding: 24px;
  background-color: ${({ colorThemeIndex }) =>
    cardColors[Object.keys(cardColors)[colorThemeIndex]].background};
  border-radius: 8px;
  border: 2px solid
    ${({ colorThemeIndex }) =>
      cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
  background-repeat: no-repeat;
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  div {
    display: flex;
    grid-template-columns: auto 20px;
    justify-content: space-between;
    gap: auto;
    h1 {
      font-weight: 700;
      font-size: 20px;
      color: ${({ colorThemeIndex }) =>
        cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
      margin-bottom: 16px;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    color: ${({ colorThemeIndex }) =>
      cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
    margin-top: 40px;
  }

  h3 {
    font-weight: 700;
    font-size: 10px;
    color: ${({ colorThemeIndex }) =>
      cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
  }

  ul {
    margin-bottom: 16px;
    li {
      font-weight: 700;
      font-size: 10px;
      color: ${colors.gray.dark};
    }
  }
`

export const CheckField = styled.div<{
  checked: boolean
  colorThemeIndex: number
}>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 2px solid
    ${({ colorThemeIndex }) =>
      cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
  cursor: pointer;
  background-color: ${({ colorThemeIndex, checked }) =>
    checked
      ? cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles
      : 'transparent'};
`

export const LinkArea = styled.div<{
  colorThemeIndex: number
}>`
  display: flex;

  button {
    color: ${({ colorThemeIndex }) =>
      cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
    padding: 14px 0;
    margin-left: auto;

    > span {
      color: ${({ colorThemeIndex }) =>
        cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};

      > svg {
        stroke: ${({ colorThemeIndex }) =>
          cardColors[Object.keys(cardColors)[colorThemeIndex]].borderAndTitles};
      }
    }
  }
`
