import React from 'react';

const InputText = (props) => {
    return (
        <div className='input-group' arial-expanded={`${props.expanded === undefined ? true : props.expanded}`}>
          { props.label && <label htmlFor={props.label}>{props.label}</label>}
            <input type='password' value={props.value} id={props.label}
            onChange={(e) => props.setValue(e.target.value)} 
            placeholder={props.placeHolder}
           /> 
        </div>
    );
};



export default InputText;