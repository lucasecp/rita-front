import React from 'react';
import { BtnClose, Container,Content, FooterModal, ModalMain, ModalTitle } from './style';
 const  Modal = (props) => {
    return(
        <Container onClick={props.onClickModal}>
           <Content>
           <BtnClose onClick={props.onClickModal} type={props.type}></BtnClose>
           <ModalTitle>{props.title}</ModalTitle>
           <ModalMain>{props.content}</ModalMain>
           <FooterModal>{props.footer}</FooterModal>
           </Content>
        </Container>
    )
}
export default Modal