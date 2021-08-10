import React, { useState } from 'react';
import Modal from '../../../components/Modal';
import InputMask from '../../../components/Form/InputMask';
import validatorCpf from '../../../helpers/validatorCpf'
import InputText from '../../../components/Form/InputText';


const CardSabin = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalTitle, setTitleModal] = useState('');
    const [modalType, setModalType] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [formContent, setcontent] = useState('contentCpf');
    const [cpf, setCpf] = useState('');
    const [optionsConfirm, setOptions] = useState([])
    const [inputRadio, setInputRadio] = useState('')
    const [modalLabelBtn, setModalLabelBtn] = useState('Entendi');
    
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')


    //Apenas para teste (VERSÃO FINAL VAI BUSCAR NO SERVIDOR)
    const fetchData = (data) => {
        if (data.length) {
            setActiveModal(true);
            setModalType('error');
            setTitleModal('Desculpe');
            setModalContent('Os seus dados não formam encontrados na nossa base. Isso não significa que seu cadastro do cartão Sabin Saúde não exista.');
            setModalLabelBtn('Faça seu cadastro');
        }
        else {
            setActiveModal(true);
            setModalType('warning');
            setTitleModal('Atenção');
            setModalContent('Autoriza importar seus dados cadastrais do Cartão Sabin Saúde?');
        }
    }


    const setModalErrors = () => {
        setActiveModal(true);
        setModalType('error');
        setTitleModal('Preenchimento incorreto');
        setModalLabelBtn('Entendi');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        validateCpf()
    }
    const validateCpf = () => {
        const newCpf = [...cpf].toString().replace(/\D+/g, '');
        if (!newCpf.length) {
            setModalErrors();
            setModalContent('O campo CPF deve ser informado.');
        }
        else if (!validatorCpf(newCpf)) {
            setModalErrors();
            setModalContent('Informe um CPF válido.');
        }
        else {
            let fakeData = [{ label: 'Email: xxxxx@email.com', value: 'xxxxx@email.com' , target:'email' },
            { label: 'Celular: 2199999999', value: '2199999999' , target:'celular' },
          ];

            setOptions(fakeData)
            fetchData(fakeData);
            setTimeout(() => {
                fetchData([])
            }, 500)
        }
    }

    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            setActiveModal(false);
        }
    }
    const handlePushToConfirm = () => {
        setActiveModal(false);
        setcontent('confirmData')
    }
    const handleSubmitData = (e) => {
        e.preventDefault()
    }
    const handleClickInput = () => {

    }

    return (
        <div className='card-sabin'>
            { formContent === 'contentCpf' ?
            <form method='GET' onSubmit={handleSubmit}>
                <div className='img'></div>
                <InputMask maxLength={14} typeMask={'cpf'}
                value={cpf} setValue={setCpf} label='Insira seu CPF: *'
                placeHolder='123.456.789-00'
            />
                <button data-label-button='Confirmar'>Encaminhar</button>
            </form>
            :
            <form method='GET' onSubmit={handleSubmitData}>
                <div className='img'></div>
                <h3>Para continuarmos, precisamos confirmar alguns dados.
                    Escolha uma das opções abaixo.</h3>

                   {optionsConfirm.length && <><label htmlFor={optionsConfirm[0].label} >
                    <input type='radio' id={optionsConfirm[0].label} value={optionsConfirm[0].value} 
                    onChange={(e) => setInputRadio(e.target.value)} checked={inputRadio === optionsConfirm[0].value} />
                    {optionsConfirm[0].label}
                    </label>
               <InputText expanded={inputRadio === optionsConfirm[0].value}
                     setValue={setEmail} value={email}
                     placeHolder={optionsConfirm[0].target === 'celular' ? '(00) 00000-0000' : 'xxxxxxxx@email.com'}
                     />
                  </>      }

                  {optionsConfirm.length > 1 && <>  <label htmlFor={optionsConfirm[1].label} >
                    <input type='radio' id={optionsConfirm[1].label} value={optionsConfirm[1].value} 
                    onChange={(e) => setInputRadio(e.target.value)} checked={inputRadio === optionsConfirm[1].value} />
                    {optionsConfirm[1].label}
                    </label>
                    <InputText expanded={inputRadio === optionsConfirm[1].value}
                     setValue={setPhone} value={phone}
                     placeHolder={optionsConfirm[1].target === 'celular' ? '(00) 00000-0000' : 'xxxxxxxx@email.com'}
                     />
                     </>      }

                <div className='btn-group'>
                <a href="#">Não reconheço esses dados</a>
                <button data-label-button='Confirmar'>Encaminhar</button>
                </div>

            </form>
            }

            <Modal
                type={modalType} active={activeModal} title={modalTitle} content={modalContent} onClickModal={handleCloseModal}
                footer={modalType === 'error' ? <button onClick={handleCloseModal} data-label-button={modalLabelBtn}>{modalLabelBtn}</button>
                    : <>
                        <a href='#' data-label-button='sim' onClick={handlePushToConfirm}>Sim</a>
                        <a href='#' data-label-button='não' onClick={handleCloseModal}>Não</a>
                    </>
                } />
        </div>
    );
};


export default CardSabin;
