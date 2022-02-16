import styled from 'styled-components'
import colors from '@/styles/colors'
import polygon from '@/assets/icons/polygon.svg'

export const Container = styled.div`
  .e-checkbox-wrapper .e-frame.e-check,
  .e-css.e-checkbox-wrapper .e-frame.e-check::before {
    background: ${({ theme }) => theme.main};
    border-color: ${({ theme }) => theme.main};
  }

  .e-checkbox-wrapper .e-frame,
  .e-css.e-checkbox-wrapper .e-frame {
    border-color: ${({ theme }) => theme.main};
  }

  .e-frame.e-icons.e-check {
  }

  .e-checkbox-disabled {
    user-select: none;
  }

  .custom.e-treeview {
    .e-list-item {
      cursor: none;

      .e-icon-expandable::before,
      .e-icon-collapsible::before {
        font-size: 12px;
        margin-left: 16px;
        content: '\e700';
      }
    }
  }

  .e-treeview {
    .e-list-item {
      .e-list-text {
        font-size: 20px;
        color: ${colors.gray.dark};
      }
      div.e-icons {
        order: 1;
        margin: auto 0 auto auto;
        ::before {
          margin: 8px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          content: ' ';
          background-image: url(${polygon});
          background-repeat: no-repeat;
          background-position: center;
        }
      }
      .e-icons.e-icon-collapsible {
        transform: rotate(180deg);
      }
      .interaction.e-icon-collapsible {
        padding: auto;
        background: transparent;
      }
      .e-icons.interaction {
        .e-icon-expandable {
          display: flex;
          margin: auto;
        }
      }
      .e-level-2 {
        display: flex;
        width: 100%;
        height: 41px;
        font-size: 32px;
        justify-content: left;
        background: ${colors.gray.extraLight};
      }
    }
    .e-level-1.e-has-child {
      border-radius: 8px;
      overflow: hidden;
      margin: 8px 0px;
      .e-active.e-node-focus.e-hover {
        color: ${colors.gray.dark};
      }
      .e-node-focus.e-node-collapsed {
      }
    }
  }

  .e-treeview .e-list-item.e-active > .e-text-content .e-list-text {
    color: ${colors.gray.dark};
  }

  .e-text-content.e-icon-wrapper {
    display: grid;
    grid-template-columns: 30px 30px 1fr;
    width: 100%;
    height: 41px;
    background: ${colors.gray.light};
    padding: 8px;
  }

  .e-text-content {
    align-items: center;
    display: flex;
  }

  .e-checkbox-wrapper .e-ripple-element,
  .e-css.e-checkbox-wrapper .e-ripple-element {
    background: transparent;
  }

  /* e-ripple-container e-ripple //bolinha rosa */

  .e-checkbox-wrapper {
    .e-frame.e-stop,
    .e-css.e-checkbox-wrapper .e-frame.e-stop {
      background-color: #fff;
      border-color: ${({ theme }) => theme.main};
      color: ${({ theme }) => theme.main};
    }
    .e-frame.e-check:hover {
      background: ${({ theme }) => theme.main};
    }
    .e-css {
    }
    .e-stop::before,
    .e-css.e-checkbox-wrapper.e-stop::before {
      background: ${({ theme }) => theme.main};
    }
  }

  .e-fullrow {
    border-radius: 8px;
    border: none;
    margin: 0;
    height: 41px;
  }

  .e-list-parent.e-ul {
    padding: 0 0 0 0;
    vertical-align: middle;
    margin: 0;
  }
`
