import { InputHTMLAttributes, useState } from 'react'
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
  error: string
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  value,
  setValue,
  options,
  error,
  ...rest
}) => {
  const [suggestions, setSuggestions] = useState<AutocompleteOptions[]>([])

  const onChangeAutocomplete = (text: string) => {
    let matches: AutocompleteOptions[] = []

    if (text.length > 0) {
      matches = options.filter((option) => {
        const regex = new RegExp(`${text}`, 'gi')
        return option.label.match(regex)
      })
    }

    setSuggestions(matches)
  }

  const onClickSuggestion = (valueClicked: {
    label: string
    value: number
  }) => {
    setValue(valueClicked)
    setSuggestions([])
  }

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={value.label}
        onChange={(e) => {
          setValue({
            label: e.target.value,
            value: 0,
          })
          onChangeAutocomplete(e.target.value)
        }}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([])
          }, 100)
        }}
        autoComplete="off"
        {...rest}
      />
      {error && <p className="error">{error}</p>}
      {suggestions.length > 0 && (
        <ListSuggestions fieldError={!!error}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.value}
              onClick={() => onClickSuggestion(suggestion)}
            >
              {suggestion.label}
            </li>
          ))}
        </ListSuggestions>
      )}
    </Container>
  )
}
