import React, { useEffect, useRef } from 'react'
import { Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import generateRandomString from '@/helpers/generateRandomString'
import MsgError from '@/components/MsgError'

const CustomMultSelect = ({ label, value, setValue, options,msgError,hasError, ...rest }) => {
  const containerDiv = useRef(null)

  useEffect(() => {
    adjustSelectOptions(containerDiv?.current)
  }, [])

  window.onresize = () => adjustSelectOptions(containerDiv?.current)

  return (
    <Container
      {...rest}
      hasError={hasError}
      ref={containerDiv}
      id={generateRandomString(7)}
      onClick={() => adjustSelectOptions(containerDiv?.current)}
    >
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
      {msgError && <MsgError>{msgError}</MsgError>}
    </Container>
  )
}

export default CustomMultSelect
