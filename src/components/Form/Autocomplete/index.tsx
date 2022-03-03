import { ChangeEvent, useState } from 'react'
import { Container, ListSuggestions } from './styles'

export interface AutocompleteOptions {
  label: string
  value: number
}

interface AutocompleteProps {
  label: string
  value: AutocompleteOptions
  setValue: React.Dispatch<React.SetStateAction<AutocompleteOptions>>
  options: AutocompleteOptions[]
  setOptions: React.Dispatch<React.SetStateAction<AutocompleteOptions[]>>
  error: string
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  value,
  setValue,
  options,
  setOptions,
  error,
  ...rest
}) => {
  const [showList, setShowList] = useState(false)

  const onClickSuggestion = (valueClicked: {
    label: string
    value: number
  }) => {
    setValue(valueClicked)
    setOptions([])
    setShowList(false)
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      label: e.target.value,
      value: 0,
    })
  }

  const onFocusInput = () => {
    setShowList(true)
  }

  const onBlurInput = () => {
    setTimeout(() => {
      setShowList(false)
    }, 300)
  }

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={value.label}
        onChange={onChangeInputValue}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        autoComplete="off"
        {...rest}
      />
      {error && <p className="error">{error}</p>}
      {options.length > 0 && showList && (
        <ListSuggestions fieldError={!!error}>
          {options.map((option) => (
            <li key={option.value} onClick={() => onClickSuggestion(option)}>
              {option.label}
            </li>
          ))}
        </ListSuggestions>
      )}
    </Container>
  )
}
