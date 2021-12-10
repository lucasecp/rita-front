import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'
import useSearch from './useSearch'
import { Container } from './styles'

const top100Films = [
  { label: 'The Shawshank Redemption', value: 4 },
  { label: 'The Godfather', value: 1972 },
  { label: 'The Godfather: Part II', value: 1974 },
  { label: 'The Dark Knight', value: 2008 },
  { label: '12 Angry Men', value: 1957 },
  { label: "Schindler's List", value: 1993 },
  { label: 'Pulp Fiction', value: 1994 },
]
// urlApi - ex: Patient, User, etc..
// keyLabelFromApi & keyValueFromApi - label and value to get on especific api call

const InputAutoComplete = ({
  urlApi,
  endPoint,
  label,
  setValue,
  keyLabelFromApi,
  keyValueFromApi,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  useSearch(
    endPoint,
    urlApi,
    keyLabelFromApi,
    keyValueFromApi,
    inputValue,
    setOptions,
    setLoading
  )

  return (
    <Container>
      {label && <label>{label}</label>}
      <Autocomplete
        id="combo-box-demo"
        options={options}
        loading={loading}
        clearOnBlur={false}
        loadingText="Carregando..."
        noOptionsText="Nenhum resultado."
        onChange={(event, obj) => setValue && obj && setValue(obj.value)}
        onInputChange={(event, value) => setInputValue(value)}
        renderInput={(params) => (
          <TextField {...params} type="text" {...rest} />
        )}
      />
    </Container>
  )
}

export default InputAutoComplete
