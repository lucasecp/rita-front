import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete'
import useSearch from './useSearch'
import { Container } from './styles'
import ItemListBox from './ItemListBox/ItemListBox'


const InputAutoComplete = ({
  urlApi,
  endPoint,
  label,
  setValue,

  ...rest
}) => {
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  useSearch(endPoint, urlApi, inputValue, setOptions, setLoading)

  return (
    <Container>
      {label && <label>{label}</label>}
      <Autocomplete
        id="combo-box-demo"
        options={options}
        loading={loading}
        clearOnBlur={false}
        disablePortal
        loadingText="Carregando..."
        noOptionsText="Nenhum resultado."
        // groupBy={(option) => option.grouping}
        onChange={(event, obj) => setValue && obj && setValue(obj.value)}
        onInputChange={(event, value) => setInputValue(value)}
        renderInput={(params) => (
          <TextField {...params} type="text" {...rest} />
        )}
        getLimitTagsText={option => console.log(option)}
        getOptionLabel={option => option.grouping}
        renderOption={option => <ItemListBox key={option.id} label={option.key} {...option} />}
      />
    </Container>
  )
}

export default InputAutoComplete
