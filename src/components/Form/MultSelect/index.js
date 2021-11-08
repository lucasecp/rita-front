import React, { useEffect } from 'react'
import { Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import adjustSelectOptions from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'

const CustomMultSelect = ({ label, value, setValue, options, ...rest }) => {

  useEffect(() => {
    adjustSelectOptions()
  }, []);
  window.onresize = adjustSelectOptions

  return (
    <Container {...rest} onClick={adjustSelectOptions}>
      {label && <label>{label}</label>}
      <Multiselect
        options={options}
        displayValue="name"
        showCheckbox
        placeholder=""
        customCloseIcon={<CloseMultSelectIcon />}
        emptyRecordMsg="Nenhum resultado."
        closeOnSelect={false}
        onSelect={(values) => setValue(values)}
        onRemove={(values) => setValue(values)}
        selectedValues={value}
        {...rest}
      />
      {!!value.length && (
        <button disabled={!value} onClick={() => setValue([])} />
      )}
    </Container>
  )
}

export default CustomMultSelect
