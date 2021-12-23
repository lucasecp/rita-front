import React, { useEffect, useRef } from 'react'
import { Content, Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import generateRandomString from '@/helpers/generateRandomString'

const CustomMultSelect = ({
  label,
  value,
  setValue,
  options,
  messageError,
  hasError,
  disabled,
  variation,
  ...rest
}) => {
  const containerDiv = useRef(null)

  useEffect(() => {
    adjustSelectOptions(containerDiv?.current)
  }, [])

  window.onresize = () => adjustSelectOptions(containerDiv?.current)

  return (
    <Container disabled={disabled} variation={variation} {...rest}>
      {label && <label>{label}</label>}
      <Content
        disabled={disabled}
        hasError={hasError}
        ref={containerDiv}
        id={generateRandomString(7)}
        onClick={() => adjustSelectOptions(containerDiv?.current)}
        variation={variation}
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
      </Content>
      {messageError && <small>{messageError}</small>}
    </Container>
  )
}

export default CustomMultSelect
