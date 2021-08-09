import React from 'react';

 const  Modal = (props) => {
    return(
        <div className={`${props.type} modal-container`} data-close-modal={props.active} onClick={props.onClickModal}>
           <div className='modal-content' >
           <button onClick={props.onClickModal} className='btn-close'></button>
           <h2 className='modal-title'>{props.title}</h2>
           <div className='modal-main'>{props.content}</div>
           <footer className='footer-modal'>{props.footer}</footer>
           </div>
        </div>
    )
}
export default Modal