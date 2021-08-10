import React,{} from 'react';

const InputMask = (props) => {

    const verifyTypeMask = () => {
       if(props.typeMask === 'cpf'){
          maskCpf();
       }
    }
    const maskCpf = () => {
        let value = props.value;
        if(value.length === 3) value += '.';
        if(value.length === 7) value += '.';
        if(value.length === 11) value += '-';
        props.setValue(value)
    }
    const containsNumbers = (value) =>  new RegExp("^[0-9]*$").test(value)

    const handleChange = (e) => {
        //Forçando o usuário a digitar somente números
        if(!containsNumbers(e.target.value.replace(/(\.|\/|-)/g,""))) return
        props.setValue(e.target.value);
    }
    

    return (
        <div className='input-group'>
            <label htmlFor={props.label}>{props.label}</label>
            <input type='text' id={props.label}
             onChange={handleChange} value={props.value}
             maxLength={props.maxLength}
             onKeyPress={verifyTypeMask}
             placeholder={props.placeHolder}
            />
        </div>
    );
};


export default InputMask;