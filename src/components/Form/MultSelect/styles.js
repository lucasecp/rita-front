import colors from '@/styles/colors'
import styled from 'styled-components'
import checkedIcon from '@/assets/icons/checked.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin-bottom: 9px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
  .searchWrapper {
    border: none;
    border-bottom: 2px solid ${colors.purple.main.middle};
    border-radius: 0;
  }
  .multiSelectContainer {
    /* position: static; */
  }
  .optionListContainer {
    ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: red;
  }
    /* width: auto; */
  }
  .multiSelectContainer ul{
  }
  .chip {
    border-radius: 16px;
    padding: 2px 8px 2px 8px;
    background: #9b97ff;
  }
  .custom-close {
    padding-left: 6px;
    padding-bottom: 1px;
    cursor: pointer;
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

  input[type='checkbox'] {
    /* change "blue" browser chrome to yellow */
    /* filter: invert(100%) hue-rotate(18deg) brightness(1.7); */
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

`
