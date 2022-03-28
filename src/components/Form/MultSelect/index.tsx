import React, { useEffect, useRef } from 'react'
import { Content, Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import generateRandomString from '@/helpers/generateRandomString'

export interface MultiSelectOption {
  id: string | number
  name: string
  [x: string]: any
}

interface MultiSelectCustomProps {
  label?: string
  value: MultiSelectOption[]
  setValue?: (option: MultiSelectOption[]) => void
  options?: MultiSelectOption[]
  messageError?: string
  hasError?: boolean
  disabled?: boolean
  variation?: 'secondary'
  onSelect?: (values: MultiSelectOption[], value?: MultiSelectOption) => void
  onRemove?: (values: MultiSelectOption[], value?: MultiSelectOption) => void
  closeOnSelect?: boolean
  name?: string
  color?: string
  [x: string]: any
}

const CustomMultSelect: React.FC<MultiSelectCustomProps> = ({
  label,
  value,
  setValue,
  options,
  messageError,
  hasError,
  disabled,
  variation,
  color,
  name,
  ...rest
}) => {
  const containerDiv = useRef(null)

  useEffect(() => {
    adjustSelectOptions(containerDiv?.current)
  }, [])

  window.onresize = () => adjustSelectOptions(containerDiv?.current)

  return (
    <Container disabled={disabled} variation={variation} >
      {label && <label>{label}</label>}
      <Content
        disabled={disabled}
        hasError={hasError}
        ref={containerDiv}
        id={generateRandomString(7)}
        onClick={() => adjustSelectOptions(containerDiv?.current)}
        variation={variation}
        color={color}
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
