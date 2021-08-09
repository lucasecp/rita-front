import { useRef, useState } from "react"

 const InputPassword = (props) => {
    const [activeEyes, setActiveEyes] = useState(false)
    const inputPass = useRef();
    
    const handleChange = (e)=>{
        props.setValue(e.target.value);
        setActiveEyes(true)
    }
    const handleSeePassword = () => inputPass.current.type === 'password' 
    ? inputPass.current.type = 'text' :
    inputPass.current.type = 'password';
      
    
    return (
        <div className='input-password input-group'>
            <label htmlFor={props.label}>{props.label}</label>
            <input type='password' value={props.value} id={props.label}
            onChange={handleChange} ref={inputPass} disabled={props.disabled}
           onFocus={()=> props.value ? setActiveEyes(true) : setActiveEyes(false) }/> 
            { activeEyes && <span className='btn-see-password' onClick={handleSeePassword}></span>}
        </div>
    )
}
export default InputPassword