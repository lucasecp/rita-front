import React, { useEffect, useRef } from 'react'
import { Content, Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import generateRandomString from '@/helpers/generateRandomString'
import MsgError from '@/components/MsgError'

const CustomMultSelect = ({
  label,
  value,
  setValue,
  options,
  msgError,
  hasError,
  disabled,
  ...rest
}) => {
  const containerDiv = useRef(null)

  useEffect(() => {
    adjustSelectOptions(containerDiv?.current)
  }, [])

  window.onresize = () => adjustSelectOptions(containerDiv?.current)

  return (
    <Container disabled={disabled}  {...rest}>
      {label && <label>{label}</label>}
      <Content
        disabled={disabled}
        hasError={hasError}
        ref={containerDiv}
        id={generateRandomString(7)}
        onClick={() => adjustSelectOptions(containerDiv?.current)}
       
        {...rest}
      >
        <Multiselect
          options={options || []}
          displayValue="name"
          showCheckbox
          placeholder=""
          customCloseIcon={<CloseMultSelectIcon />}
          emptyRecordMsg="Nenhum resultado."
          closeOnSelect={false}
          onSelect={(values) => setValue !== undefined && setValue(values)}
          onRemove={(values) => setValue !== undefined && setValue(values)}
          selectedValues={value}
          {...rest}
        />
        {!!value?.length && (
          <button
            disabled={!value}
            onClick={() => setValue !== undefined && setValue([])}
          />
        )}
        {msgError && <MsgError>{msgError}</MsgError>}
      </Content>
    </Container>
  )
}

export default CustomMultSelect