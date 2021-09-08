import React from 'react';
const InputRadio = ({ options, valueInputRadio, setInputRadio }) => {
    return (<>
            {options.map((option,i) =>
                   <label htmlFor={option.label}  key={i}>
                    <input type='radio' id={option.label} value={option.value}
                    onChange={(e) => setInputRadio(option.value)} checked={valueInputRadio === option.value} />
                    {option.label}
                    </label>
                )}
                </>
    );
};

export default InputRadio;