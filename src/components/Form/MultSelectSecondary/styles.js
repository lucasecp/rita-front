import colors from '@/styles/colors'
import styled, { css } from 'styled-components'
import checkedIcon from '@/assets/icons/checked.svg'
import closeIcon from '@/assets/icons/close.svg'

export const Content = styled.div`
  display: grid;
  align-items: start;
  border-bottom: 2px solid ${colors.purple.main.middle};
  max-height: 54px;

  .optionListContainer {
    margin-top: 2px;
    box-shadow: 0px 1px 2px 0px #e5e5e5;
  }
  .searchWrapper {
    border: none;
    border-radius: 0;
    display: flex;
    min-width: fit-content;
    max-height: 32px;
    span {
      cursor: pointer;
    }
  }
  .multiSelectContainer {
    position: static;
    grid-area: 2/1;
    overflow: hidden;
    max-height: 32px;
    max-width: calc(100% - 25px);
  }
  .optionListContainer {
    ::-webkit-scrollbar-track {
      border-radius: 8px;
      background: red;
    }
    /* width: auto; */
  }
  .multiSelectContainer ul {
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #eeeeee;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #afafaf;
      border-radius: 8px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .chip {
    border-radius: 16px;
    padding: 2px 8px 2px 8px;
    background: transparent;
    border: 1px solid #7338cb;
    color: #7338cb;
    font-family: Athletics;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    path {
      fill: #7338cb;
    }
  }
  .custom-close {
    padding-left: 6px;
    padding-bottom: 1px;
    cursor: pointer;
  }
  .notFound {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #6a6a6a;
  }
  .optionContainer {
    border-radius: 0px 0px 4px 4px;
    border: none;
    li,
    .highlightOption {
      color: #6a6a6a;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;

      :hover {
        background-color: ${colors.purple.main.dark};
        color: #fff;
        input[type='checkbox']:after {
          border-color: #fff;
        }
      }
    }
    .highlightOption {
      background: transparent;
    }
  }
  .multiSelectContainer input {
    margin-top: 0;
  }

  input[type='checkbox'] {
    appearance: none;
    margin-right: 8px;
    margin-bottom: 4px;
    :after {
      content: '';
      height: 20px;
      width: 20px;
      display: block;
      border: 2px solid ${colors.purple.main.dark};
      border-radius: 4px;
    }
  }
  input[type='checkbox']:checked {
    :after {
      background-color: ${colors.purple.main.dark};
      background-image: url(${checkedIcon});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  > button {
    align-self: center;
    justify-self: end;
    grid-area: 2/1;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    ::after {
      height: 10px;
      width: 10px;
      box-sizing: content-box;
      display: block;
      content: '';
      background: url(${closeIcon});
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 2px;
      filter: invert(80%) sepia(0%) saturate(2969%) hue-rotate(192deg)
        brightness(1006%) contrast(30%);
      opacity: 0.6;
      transition: 0.3s;
    }
    :hover::after {
      opacity: 1;
      transition: 0.3s;
    }
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #eeeeee;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${colors.orange.light};
    `}

  ${({ variation }) =>
    variation === 'secondary' &&
    css`
      border: 1px solid #eeeeee;
      box-shadow: 0px 2px 4px 0px #e5e5e5;
      border-radius: 8px;
      background: #fff;
      max-height: 100%;

      .optionListContainer {
        margin-top: 3px;
      }
      .search-wrapper {
        padding: 0;
        display: block;
        max-height: 100%;
      }
      .chip {
        margin-bottom: 0;
        & + .chip {
          margin-top: 5px;
        }
      }
      .multiSelectContainer {
        max-height: 100%;
      }
      .searchWrapper {
        padding: 14px 16px;
        padding-left: 16px;
        max-height: 100%;
      }
    `}

        ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      .optionListContainer,
      .multiSelectContainer input {
        visibility: hidden;
      }
      .chip {
        cursor: default !important;
      }
    `}

    ${({ disabled, variation }) =>
    disabled &&
    variation === 'secondary' &&
    css`
      opacity: 1;
      background: ${colors.gray.light};
      .optionListContainer,
      .multiSelectContainer input {
        visibility: hidden;
      }
      .chip {
        color: #6a6a6a;
        border-color: #6a6a6a;
      }
      .custom-close,
      > button {
        display: none;
      }
    `}
`
export const Container = styled.div`
  > label {
    grid-area: 1/1;
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  ${({ disabled, variation }) =>
    disabled &&
    variation !== 'secondary' &&
    css`
      > label {
        opacity: 0.5;
      }
    `}
`