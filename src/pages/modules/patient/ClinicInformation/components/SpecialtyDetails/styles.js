import styled from 'styled-components'
import { ReactComponent as DropdownIcon } from '@/assets/icons/dropdown.svg'

export const Container = styled.div`
  border-radius: 8px;
  border: solid 1px #f5f5f5;
  overflow: hidden;
  > div:first-child {
    border-radius: 8px 8px 0 0;
    background: #f5f5f5;
    padding: 24px;
    cursor: pointer;
    display: flex;
    > div:first-child{
      display: flex;
      @media(max-width: 767px){
        flex-direction: column;
        > div h2{
          margin-top: 10px;
        }
      }

    }
    > div:first-child > div:first-child{
      margin-right: 24px;

      > img {
        border-radius: 50%;
        width: 98px;
        height: 98px;
        object-fit: fill;
      }
    }
    > div {
      h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        color: #6a6a6a;
        margin-bottom: 8px;
        margin-right: 15px;
      }
      > h3 {
        font-size: 16px;
        color: #6a6a6a;
        font-weight: 400;
        line-height: 20px;
      }
    }
    > svg {
      margin-left: auto;
      cursor: pointer;
      min-width: 40px
    }
  }
`
export const DropdownIconStyled = styled(DropdownIcon)`
    transition: .3s;
  &[data-expanded='1'] {
   transform: rotate(-180deg);
   transition: .3s;
  }
`
