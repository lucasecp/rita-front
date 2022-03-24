import InputText from '@/components/Form/InputText'
import { ProfissionalDatasI } from '../../Types'
import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import SelectUf from '../SelectUf'
import hasSpecialCaracter from '@/helpers/hasSpecialCaracter'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'

interface ProfissionalDatasProps {
  data: ProfissionalDatasI
}

export const ProfissionalDatas: React.FC<ProfissionalDatasProps> = ({
  data,
}) => {
  const [profissionalName, setProfissionalName] = useState(
    data?.profissionalName || '',
  )
  const [registerNumber, setRegisterNumber] = useState(
    data?.registerNumber || '',
  )
  const [issuingAgency, setIssuingAgency] = useState(data?.issuingAgency || '')
  const [uf, setUf] = useState(data?.uf || '')
  const [ufToApi, setUfToApi] = useState('')
  const [cashBack, setCashBack] = useState(data?.cashback || '')
  const [takeRate, setTakeRate] = useState(data?.takerate || '')

  useEffect(() => {
    setProfissionalName(data?.profissionalName || '')
    setIssuingAgency(data?.issuingAgency || '')
    setUf(data?.uf || '')
    setRegisterNumber(data?.registerNumber || '')
    setCashBack(data?.cashback || '')
    setTakeRate(data?.takerate || '')
  }, [data])

  return (
    <Container>
      <h1>Dados Profissionais do Especialista</h1>
      <section>
        <InputText
          label="Nome Profissional:"
          value={profissionalName}
          setValue={setProfissionalName}
          name="profissionalName"
          disabled
        />
        <InputText
          label="Número de Registro:"
          value={registerNumber}
          setValue={setRegisterNumber}
          disabled
        />

        <SelectIssuingAgency
          issuingAgency={issuingAgency}
          setIssuingAgency={setIssuingAgency}
          disabled
        />

        <SelectUf uf={uf} setUf={setUf} setUfToApi={setUfToApi} />
      </section>
      <div>
        <InputText
          label="CashBack %:"
          value={cashBack}
          setValue={setCashBack}
          disabled
        />
        <InputText
          label="TakeRate %:"
          value={takeRate}
          setValue={setTakeRate}
          disabled
        />
      </div>
    </Container>
  )
}
