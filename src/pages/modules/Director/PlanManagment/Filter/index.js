import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
import CustomRangePicker from '@/components/Form/CustomRangePicker'
import CustomMultSelect from '@/components/Form/MultSelect'
import React, { useState } from 'react'
import MultSelectCity from '../Components/MultSelectCity'
import MultSelectRegional from '../Components/MultSelectRegional'
import MultSelectServices from '../Components/MultSelectServices'
import MultSelectUf from '../Components/MultSelectUf'
import { staticStatus } from '../static/fieldsMultSelect'
import { BtnGroup, Container } from './styles'

const Filter = () => {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [status, setStatus] = useState([])
  const [services, setServices] = useState([])
  const [regional, setRegional] = useState([])
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])
  const [validityDate, setValidityDate] = useState([])

  const clearFields = () => {
    setName('')
    setCode('')
    setStatus('')
    setServices('')
    setRegional('')
    setUf('')
    setCity('')
    setValidityDate([])
  }

  const allFieldsIsEmpty =
   ( !name &&
    !code &&
    !status.length &&
    !services.length &&
    !regional.length &&
    !uf.length &&
    !city.length &&
    !validityDate.length)

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Código:"
          value={code}
          setValue={setCode}
          maxLength="10"
        />

        <InputText
          variation="secondary"
          label="Nome:"
          onlyLetter
          value={name}
          setValue={setName}
          maxLength='50'
        />

        <CustomRangePicker
          label="Período de Vigência:"
          value={validityDate}
          setValue={setValidityDate}
        />

        <CustomMultSelect
          label="Status:"
          options={staticStatus}
          value={status}
          setValue={setStatus}
        />
        <MultSelectServices services={services} setServices={setServices} />

        <MultSelectRegional regional={regional} setRegional={setRegional} />

        <MultSelectUf uf={uf} setUf={setUf} regional={regional} />

        <MultSelectCity city={city} setCity={setCity} uf={uf} />
      </div>

      <BtnGroup hidden={allFieldsIsEmpty}>
        <OutlineButton small variation="red" onClick={() => clearFields()}>
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium>Filtrar Resultados</ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
