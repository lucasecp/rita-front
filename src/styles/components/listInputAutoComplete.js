import { css } from 'styled-components'

export default css`
  .ant-select-dropdown {
    padding: 0 !important;
  }
  .ant-select-item {
    padding: 14px 16px;

    & + .ant-select-item-group {
      height: 1px;
      background-color: #f3f3f3;
      padding: 0;
      min-height: 1px;
      display: block;
    }
  }
  .rc-virtual-list-holder {
    overflow-y: auto !important;
  }
  .rc-virtual-list-scrollbar {
    display: none !important;
  }
  .ant-select-item-group {
    display: none;
  }
  #rc_select_0_list {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
  }
`
