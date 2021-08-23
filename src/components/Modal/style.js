import styled, { css } from 'styled-components'
import colors from '../../styles/colors'
export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2

`
export const Content = styled.div`
    padding: 40px 25px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    max-width: 512px;
    min-width: 512px;
`


export const BtnClose = styled.button`
    background-color: transparent;
    border-radius: 50%;
    border: solid 2.3px;
    cursor: pointer;
    font-size: 16px;
    height:40px;
    width:40px;
    border: solid 3px ;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    ${props => { return props.type === 'success' && css`
    border-color: ${colors.feedback.success}` }};

    ${props => { return props.type === 'error' && css`
    border-color: ${colors.feedback.error}` }};

    ${props => { return props.type === 'warning' && css`
    border-color: ${colors.feedback.warning}`}};

    ::before{
    position: absolute;
    text-align: center;
    display: inline-block;
    font-weight: 700;
    ${props => { return props.type === 'success' && css`
    content: 'v';
    color: ${colors.feedback.success}` }}

    ${props => {return props.type === 'warning' && css`
    content: '!';
    color: ${colors.feedback.warning}` }}

    ${props => { return props.type === 'error' && css`
    content: 'x';
    color: ${colors.feedback.error}` }}
  }
`

export const ModalTitle = styled.h2`
     color: ${colors.text.primary};
    font-size: 30px;
    line-height: 16px;
    margin: 16px 0 12px 0;
    font-weight: 700;
`
export const ModalMain = styled.div`
color: ${colors.text.primary};
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
    font-weight: 400;
    text-align: center;
`
export const FooterModal = styled.footer`
  display: flex;
  align-items: center;
  * + *{
   margin-left: 10px
  }
  margin: 20px auto 0 auto;
   letter-spacing: .5px;
   position: relative;
   line-height: 16px;
   border-radius: 4px;
   transition: .3s;
`