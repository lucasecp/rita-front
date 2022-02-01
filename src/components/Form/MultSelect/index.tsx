import React, { useEffect, useRef } from 'react'
import { Content, Container } from './styles'
import Multiselect from 'multiselect-react-dropdown'
import { adjustSelectOptions } from './adjustSelectOptions'
import { ReactComponent as CloseMultSelectIcon } from '@/assets/icons/close-multselct.svg'
import generateRandomString from '@/helpers/generateRandomString'

export interface MultiSelectOption {
  id: string | number
  name: string
}

interface MultiSelectCustomProps {
  label?: string
  value: MultiSelectOption[]
  setValue?: React.Dispatch<React.SetStateAction<MultiSelectOption[]>>
  options?: MultiSelectOption[]
  messageError?: string
  hasError?: boolean
  disabled?: boolean
  variation?: 'secondary'
  onSelect?: (value: MultiSelectOption[]) => void
  onRemove?: (value: MultiSelectOption[]) => void
  closeOnSelect?: boolean
  // [x: string]: string
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
  ...rest
}) => {
  const containerDiv = useRef(null)

  useEffect(() => {
    adjustSelectOptions(containerDiv?.current)
  }, [])

  window.onresize = () => adjustSelectOptions(containerDiv?.current)

  return (
    <Container disabled={disabled} variation={variation}>
      {label && <label>{label}</label>}
      <Content
        disabled={disabled}
        hasError={hasError}
        ref={containerDiv}
        id={generateRandomString(7)}
        onClick={() => adjustSelectOptions(containerDiv?.current)}
        variation={variation}
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
