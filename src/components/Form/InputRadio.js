import React from 'react';
import InputText from './InputText';
const InputRadio = ({ options, valueInputRadio, setInputRadio, setInputText,valueInputText,placeHolderInputText }) => {
    return (<>
            {options.map((option,i) => 
            <>
                   <label key={i} htmlFor={option.label} >
                    <input type='radio' id={option.label} value={option.value} 
                    onChange={(e) => setInputRadio(e.target.value)} checked={valueInputRadio === option.value} />
                    {option.label}
                    </label>
                  { (valueInputText !== undefined || setInputText !== undefined) && <InputText expanded={valueInputRadio === option.value}
                     setValue={setInputText} value={valueInputText}
                     placeHolder={placeHolderInputText}
                     />}
            </>
                )}
                </>
    );
};

export default InputRadio;