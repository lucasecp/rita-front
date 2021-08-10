import React from 'react';
import InputText from './InputText';
const InputRadio = ({ options, valueInputRadio, setInputRadio, setInputText,valueInputText }) => {
    return (<>
            {options.map((option,i) => 
            <div key={i}>
                   <label htmlFor={option.label} >
                    <input type='radio' id={option.label} value={option.value} 
                    onChange={(e) => setInputRadio(e.target.value)} checked={valueInputRadio === option.value} />
                    {option.label}
                    </label>
                  { (valueInputText !== undefined || setInputText !== undefined) && <InputText expanded={valueInputRadio === option.value}
                     setValue={setInputText} value={valueInputText}
                     placeHolder={option.target === 'celular' ? '(00) 00000-0000' : 'xxxxxxxx@email.com'}
                     />}
            </div>
                )}
                </>
    );
};

export default InputRadio;