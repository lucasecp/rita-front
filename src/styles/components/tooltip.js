import { css } from 'styled-components'

export default css`
  .tooltip .tooltip-arrow::before {
    border-top-color: #f5f5f5;
    border-width: 0.5rem 0.5rem 0;
  }
  .tooltip.show {
    opacity: 1;
  }
  .tooltip-inner {
    background: #f5f5f5;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #6a6a6a;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`
