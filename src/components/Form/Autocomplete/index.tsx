import { InputHTMLAttributes, useState } from 'react'
import { Container, ListSuggestions } from './styles'

interface AutocompleteOptions {
  label: string
  value: string
}

interface AutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
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

  const onClickSuggestion = (valueClicked: string) => {
    setValue(valueClicked)
    setSuggestions([])
  }

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChangeAutocomplete(e.target.value)
        }}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([])
          }, 100)
        }}
        {...rest}
      />
      {error && <p className="error">{error}</p>}
      {suggestions.length > 0 && (
        <ListSuggestions fieldError={!!error}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.value}
              onClick={() => onClickSuggestion(suggestion.label)}
            >
              {suggestion.label}
            </li>
          ))}
        </ListSuggestions>
      )}
    </Container>
  )
}
