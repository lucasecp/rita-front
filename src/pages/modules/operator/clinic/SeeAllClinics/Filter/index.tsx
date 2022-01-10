import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import React, { useEffect, useState } from 'react'
import MultSelectCity from '../Components/MultSelectCity'
import MultSelectRegional from '../Components/MultSelectRegional'
import MultSelectSpecialtys from '../Components/MultSelectSpecialtys'
import MultSelectUf from '../Components/MultSelectUf'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'
import formatMultSelectValue from '@/helpers/formatMultSelectValue'
import { verifyTypedFields } from '../helpers/verifyTypedFields'
import useQuery from '@/hooks/useQuery'
import InputMask from '@/components/Form/InputMask'
import { fieldsApi } from '../static/fieldsApi'

const Filter = ({ setFilters }) => {
  const query = useQuery()

  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [status, setStatus] = useState<MultiSelectOption[]>([])
  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])
  const [specialist, setSpecialist] = useState('')
  const [district, setDistrict] = useState('')
  const [uf, setUf] = useState<MultiSelectOption[]>([])
  const [city, setCity] = useState<MultiSelectOption[]>([])

  useEffect(() => {
    setFilters(verifyTypedFields(arrayQuery))
  }, [])

  const arrayQuery = [
    { name: fieldsApi.NOME_FANTASIA, value: name },
    { name: fieldsApi.CNPJ, value: cnpj },
    { name: fieldsApi.STATUS, value: formatMultSelectValue(status) },
    {
      name: fieldsApi.ESPECIALIDADES,
      value: formatMultSelectValue(specialtys),
    },
    {
      name: fieldsApi.ESPECIALISTAS,
      value: specialist,
    },
    { name: fieldsApi.BAIRRO, value: district },
    { name: fieldsApi.UF, value: formatMultSelectValue(uf) },
    { name: fieldsApi.CIDADES, value: formatMultSelectValue(city) },
  ]

  const clearFields = () => {
    setName('')
    setCnpj('')
    setStatus([])
    setSpecialtys([])
    setDistrict('')
    setUf([])
    setCity([])
    setFilters([])
  }

  const onFilter = () => {
    setFilters(verifyTypedFields(arrayQuery))
  }

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Nome Fantasia:"
          value={name}
          setValue={setName}
          maxLength={100}
        />

        <InputMask
          variation="secondary"
          label="CNPJ:"
          value={cnpj}
          setValue={setCnpj}
          mask="99.999.999/999-99"
        />

        <CustomMultSelect
          label="Status:"
          options={staticStatus}
          value={status}
          setValue={setStatus}
        />

        <MultSelectSpecialtys
          specialtys={specialtys}
          setSpecialtys={setSpecialtys}
        />

        <InputText
          variation="secondary"
          label="Especialista:"
          value={specialist}
          setValue={setSpecialist}
          maxLength={100}
          onlyLetter
        />

        <MultSelectUf uf={uf} setUf={setUf} district={district} />

        <MultSelectCity city={city} setCity={setCity} uf={uf} />

        <InputText
          variation="secondary"
          label="Bairro:"
          value={district}
          setValue={setDistrict}
          maxLength={100}
        />
      </div>

      <BtnGroup>
        <OutlineButton small variation="red" onClick={() => clearFields()}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium onClick={onFilter}>
          Filtrar Resultados
        </ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
