import colors from '@/styles/colors'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 32px;
  overflow-x: auto;
  border-radius: 8px;

  > label {
    margin: 32px 0 0 0;
    color: ${colors.gray.middle};
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  > footer {
    padding: 24px;
    border-radius: 0px 0px 8px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    > button + button {
      margin-left: 24px;
    }
  }
`

export const useViewStyles = makeStyles({
  root: {},
})

export const useAccordionStyles = makeStyles((theme) => ({
  root: {
    color: `${colors.gray.dark}`,
    background: `${colors.gray.light}`,
    margin: '10px 0 !important',
    // padding: '14px 16px !important',
    borderRadius: '8px',
    '& > .MuiTreeItem-content': {
      flexDirection: 'row-reverse',
      fontSize: '32px',
    },
    '& > .MuiTreeItem-content > .MuiTreeItem-label': {
      display: 'flex',
      alignItems: 'center',
      padding: '14px 16px !important',
      // padding: '4px 0',
      pointerEvents: 'none',
    },
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      content: "''",
      display: 'inline-block',
      width: 12,
      height: 12,
      margin: 8,
      border: '8px solid #ccc',
      background: `black`,
    },
  },
  iconContainer: {
    // marginRight: 12,
    '& > svg': {
      // '.MuiSvgIcon-root':{
      //   background: 'black'
      // }
      // padding: 8,
      '&:hover': {
        opacity: 0.6,
      },
    },
  },
  label: {
    padding: 0,
  },
  selected: {
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      background: theme.palette.primary.main,
      border: '1px solid transparent',
    },
  },
}))

export const useItemStyles = makeStyles((theme) => ({
  root: {
    '& > .MuiTreeItem-content > .MuiTreeItem-label': {
      display: 'flex',
      alignItems: 'center',
      padding: '4px 0',
      pointerEvents: 'none',
      fontSize: '16px',
    },
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      content: "''",
      display: 'inline-block',
      width: 12,
      height: 12,
      marginRight: 8,
      border: '8px solid #ccc',
      background: 'white',
    },
  },
  iconContainer: {
    marginRight: 12,
    background: 'black',
    '& > svg': {
      padding: 8,
      '&:hover': {
        opacity: 0.6,
      },
    },
  },
  label: {
    padding: 0,
  },
  selected: {
    '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
      background: theme.palette.primary.main,
      border: '1px solid transparent',
    },
  },
}))
