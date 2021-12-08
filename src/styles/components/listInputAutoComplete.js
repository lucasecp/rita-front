import { css } from 'styled-components'

export default css`
  .MuiAutocomplete-popper {
    box-shadow: 0px 1px 2px 0px #e5e5e5;
    border: none !important;
    * {
      color: #6a6a6a !important;
      font-size: 16px !important;
      font-weight: 500 ;
      line-height: 20px;

    }
    &::after,&::before {
      display: none !important;
    }
  }
`
