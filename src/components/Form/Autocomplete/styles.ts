import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

interface ListSuggestionsProps {
  fieldError: boolean
  listSuggestionsHeight?: number
}

export const Container = styled.div<{ variation: string }>`
  display: flex;
  flex-direction: column;

  position: relative;

  > div {
    > input {
      box-shadow: unset;

      /* margin-top: 5px;
    padding: 14px 16px;
    height: fit-content;
    border: 1px solid ${colors.gray.light};
    border-radius: 8px; */
    }
  }

  > p.error {
    margin-top: 4px;
    color: ${colors.orange.middleDark};
    font-weight: 500;
    font-size: 12px;
    line-height: 17.5px;
  }

  ${({ variation }) =>
    variation === 'secondary' &&
    css`
      label {
        color: ${colors.gray.middle};
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;
      }
    `}
`

export const ListSuggestions = styled.ul<ListSuggestionsProps>`
  /* transition: 0.3s;
  height: ${({ listSuggestionsHeight = 0 }) =>
    listSuggestionsHeight > 260 ? 260 : listSuggestionsHeight}px; */

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // Posição da listagem de opções
  position: absolute;
  z-index: 2;
  top: ${({ fieldError }) => (fieldError ? '75%' : '100%')};
  left: 0;
  right: 0;

  width: 100%;
  border: 1px solid #d4d4d4;
  background: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;

  animation: fadein 0.3s;

  max-height: 260px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #eeeeee;
  }
  ::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  > li {
    padding: 10px;

    &:hover {
      background: ${colors.gray.light};
    }
  }
`
