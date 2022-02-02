import styled from 'styled-components'
import colors from '@/styles/colors'

interface ListSuggestionsProps {
  fieldError: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  > input {
    margin-top: 5px;
    padding: 14px 16px;
    height: 100%;
    border: 1px solid ${colors.gray.light};
    border-radius: 8px;
  }

  > p.error {
    margin-top: 5px;
    color: ${colors.orange.middleDark};
    font-weight: 400;
    font-size: 14px;
    line-height: 17.5px;
  }
`

export const ListSuggestions = styled.ul<ListSuggestionsProps>`
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

  animation: fadein 0.3s;

  > li {
    padding: 10px;

    &:hover {
      background: ${colors.gray.light};
    }
  }
`
