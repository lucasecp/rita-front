import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputText from '@/components/Form/InputText'
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
  const [status, setStatus] = useState('')
  const [services, setServices] = useState('')
  const [regional, setRegional] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [validityDate, setValidityDate] = useState([])

  return (
    <Container>
      <div>
        <InputText
          variation="secondary"
          label="Código:"
          value={code}
          setValue={setCode}
        />

        <InputText
          variation="secondary"
          label="Nome:"
          onlyLetter
          value={name}
          setValue={setName}
        />

        <CustomMultSelect
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

        <MultSelectUf  uf={uf} setUf={setUf}  regional={regional}/>

        <MultSelectCity city={city} setCity={setCity} uf={uf} />
      </div>
      <BtnGroup>
        <OutlineButton small variation="red">
          Limpar Filtro
        </OutlineButton>
        <ButtonPrimary medium>Filtrar Resultados</ButtonPrimary>
      </BtnGroup>
    </Container>
  )
}

export default Filter
