import { css } from 'styled-components'
import colors from '../colors'

export default css`
  .ant-picker-panel-container {
    background: transparent !important;
    box-shadow: none !important;
  }
  .ant-picker-panel,
  .ant-picker-date-panel {
    border: 1px solid #0000001a;
    border-radius: 8px !important;
    background-color: #fff !important;
  }
  .ant-picker-range-arrow {
    border-right: 1px solid #0000001a;
    border-top: 1px solid #0000001a;
  }
  .ant-picker-cell-today div::before {
    border: none !important;
  }
  .ant-picker-header button {
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    color: #6a6a6a;
  }

  .ant-picker-header-view {
    margin-right: 30px;
  }
  .ant-picker-cell-inner {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.4000000059604645px;
  }
  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border-color: ${colors.purple.main.light};
  }
  .ant-picker-content thead th {
    color: #c0a6ff;
  }
  .ant-picker-header span::before,
  .ant-picker-super-next-icon::after,
  .ant-picker-super-prev-icon::after {
    border-color: ${colors.purple.main.dark} !important;
    border-width: 2px 0 0 2px !important;
    border-radius: 2px !important;
  }
  .ant-picker-header button {
    transition: all.3s;
  }
  .ant-picker-header button:hover {
    color: ${colors.purple.main.dark};
  }
  .ant-picker-cell-in-range,
  .ant-picker-cell-range-hover,
  .ant-picker-cell-range-hover-end {
    background: ${colors.purple.main.dark};
    div {
      color: #fff;
    }
  }
  .ant-picker-cell-in-range div::selection {
    background: transparent !important;
  }
  .ant-picker-cell-in-view.ant-picker-cell-in-range::before,
  .ant-picker-cell-in-view.ant-picker-cell-in-range:hover::before {
    background: transparent !important;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
  .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before,
  .ant-picker-cell-range-start,
  .ant-picker-cell-range-end {
    background: ${colors.purple.main.dark} !important;
  }
  .ant-picker-cell-end {
  }
  .ant-picker-cell-inner *,
  .ant-picker-cell-inner * {
    background-color: #000 !important;
  }

  .ant-picker-cell-range-hover::before {
    background: ${colors.purple.main.dark} !important;
    border: none !important;
    box-shadow: none !important;
  }
  .ant-picker-cell-range-hover-end:hover::after,
  .ant-picker-cell-range-hover-end:hover::before,
  .ant-picker-cell-range-hover-end:hover div {
    border: none !important;
  }
  .ant-picker-cell-inner::before,
  .ant-picker-cell-inner::after {
    display: none;
  }
  @media (max-width: 768px) {
    .ant-picker-panels {
      flex-direction: column;
    }
  }
`
