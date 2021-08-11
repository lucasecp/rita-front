import React from 'react'

const InputMask = (props) => {
  const verifyTypeMask = () => {
    if (props.typeMask === 'cpf') {
      maskCpf()
    }
    if (props.typeMask === 'phone') {
      maskPhone()
    }
  }
  const maskCpf = () => {
    let value = props.value
    if (value.length === 3) value += '.'
    if (value.length === 7) value += '.'
    if (value.length === 11) value += '-'
    props.setValue(value)
  }

  const maskPhone = () => {
    let value = props.value
    if (value.length === 0)  value += '('
    if (value.length === 3)  value += ')'
    if (value.length === 4) value += ' '
    if (value.length === 10) value += '-'
    props.setValue(value)
  }

  const containsNumbers = (value) => new RegExp('^[0-9]*$').test(value)

  const handleChange = (e) => {
    // Forçando o usuário a digitar somente números
    if (!containsNumbers(e.target.value.replace(/(\.|\/|-)/g, '')) && props.typeMask === 'cpf') return
    props.setValue(e.target.value)
  }

  return (
    <div className="input-group" arial-expanded={`${props.expanded === undefined ? true : props.expanded}`}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="text"
        id={props.label}
        onChange={handleChange}
        value={props.value}
        maxLength={props.maxLength}
        onKeyPress={verifyTypeMask}
        placeholder={props.placeHolder}
      />
    </div>
  )
}

export default InputMask
