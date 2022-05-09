import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.header`
  > button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-style: normal;
    display: flex;
    align-items: center;
    line-height: 20px;
    color: ${colors.gray.middleLight};
    position: absolute;
    top: -30px;
    right: 0;
    padding: 0;

    > img {
      width: 15px;
      height: 15px;
      margin-left: 8px;
    }
  }
`
