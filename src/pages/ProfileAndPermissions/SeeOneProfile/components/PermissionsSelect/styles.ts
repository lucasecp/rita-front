import styled from 'styled-components'
import colors from '@/styles/colors'
// import poligom from '@/assets/icons/poligon.svg'

export const Container = styled.div`
  .e-checkbox-wrapper .e-frame.e-check,
  .e-css.e-checkbox-wrapper .e-frame.e-check::before {
    background: ${({ theme }) => theme.main};
    overflow: hidden;
    pointer-events: none;
  }

  .e-text-content.e-icon-wrapper {
    background: ${colors.gray.light};
    padding: 8px;
  }

  .e-checkbox-wrapper .e-frame.e-check:hover {
    background: ${({ theme }) => theme.main};
  }

  .e-treeview .e-list-item div.e-icons::before {
    margin: 10px;
  }

  .e-checkbox-wrapper.e-css,
  .e-list-item.e-level-1.e-has-child.e-node-focus.e-node-collapsed {
    pointer-events: none;
  }

  .e-treeview .e-list-item.e-active > .e-text-content .e-list-text {
    color: ${({ theme }) => theme.main};
}

  .e-checkbox-wrapper .e-stop::before,
  .e-css.e-checkbox-wrapper .e-stop::before {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.main};
    /* content: ''/; */
  }

  .e-checkbox-wrapper .e-frame.e-stop,
  .e-css.e-checkbox-wrapper .e-frame.e-stop {
    background-color: #fff;
    border-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.main};
  }

  .e-fullrow {
    border-radius: 8px;
    margin: 0;
    justify-content: center;
  }

  .e-text-content .e-icon-wrapper {
    flex-direction: row-reverse;
  }

  .e-list-item.e-level-1 ul {
    /* margin-bottom: 20px; */
  }

  .e-list-parent.e-ul {
    padding: 0 0 0 0;
    vertical-align: middle;
    margin: 0;
  }

  .e-list-text {
    font-size: 20px;
    }

  .e-list-item .e-level-2 {
    font-size: 32px;
    justify-content: center;
    background: ${colors.gray.extraLight};
  }

  .e-list-parent {
    /* border-radius: 8px; */
  }

  .e-control {
    /* overflow: hidden; */
  }

  .e-text-content {
    overflow: hidden;
    align-items: center;
    display: flex;
  }

  .e-list-text {
    color: ${colors.gray.dark};
  }

  .e-icons .e-icon-collapsible .interaction {
    height: 32px;
  }

  .e-text-content.e-icon-wrapper {
    /* flex-direction: row-reverse; */
    /* border-radius: 8px 8px 0 0; */
  }

  li {
    /* border-radius: 8px; */
  }
  /* .e-treeview .e-list-item {
    border-radius: 8px;
  } */
`
