import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CustomRangePicker from '@/components/CustomRangePicker'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import clearFormat from '@/helpers/clear/SpecialCaracteres'
import convertDate from '@/helpers/convertDateToIso'
import useQuery from '@/hooks/useQuery'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TablePatients from '../TablePatients'
import SelectValidator from './SelectValidator'
import { Container, BtnGroup } from './styles'

const Filter = () => {
  const query = useQuery()
  const history = useHistory()
  const DATES =
  !query.get('dataCadastroInicio') ||
  !query.get('dataCadastroFim')
    ? []
    : [moment(String(query.get('dataCadastroInicio'))),moment(String(query.get('dataCadastroFim')))]

    const CPF = query.get('cpf') || ''
    const NAME = query.get('nome') || ''
    const VALIDATOR = query.get('idValidador') || ''
    const STATUS = query.get('status') || ''

  const [dates, setDates] = useState(DATES)
  const [cpf, setCpf] = useState(CPF)
  const [name, setName] = useState(NAME)
  const [validator, setValidator] = useState(VALIDATOR)
  const [status, setStatus] = useState(STATUS)
  const [errors, setErrors] = useState({})
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState([])
  const [submited, setSubmited] = useState(false)

  useEffect(() => {
    setFilters(verifyTypedFields(objQuery))
  }, []);

  useEffect(() => {
   if(!dates[0] && !dates[1] && submited) setFilters(verifyTypedFields(objQuery))
  }, [dates]);

  const typedData = () => {
    return dates.length || clearFormat(cpf) || name || validator || status
  }
  const objQuery = [
    { name: 'nome', value: name },
    { name: 'cpf', value: clearFormat(cpf) },
    { name: 'status', value: status === 'ALL' ? '' : status },
    { name: 'dataCadastroInicio', value:  convertDate(dates[0]) },
    { name: 'dataCadastroFim', value: convertDate(dates[1]) },
    { name: 'idValidador', value: validator === 'ALL' ? '' : validator },
  ]

  const validateFields = () => {
    const newErrors = {}
    const newCpf = String(clearFormat(cpf)).trim()
    const newName = String(name).trim()

    if (newCpf.length < 3 && newCpf) {
      newErrors.cpf = 'Informe 3 dígitos ou mais'
    }
    if (newName.length < 3 && newName) {
      newErrors.name = 'Informe 3 letras ou mais'
    }
    setErrors(newErrors)
    return newErrors
  }
  const setInitialStates = () => {
    setName('')
    setCpf('')
    setValidator('')
    setStatus('')
    setDates([])
    setErrors({})
    setOrders([])
    setFilters([])
    history.push('?page=1&limit=10')
    setSubmited(false)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmited(true)

    if (Object.keys(validateFields()).length) return

    setFilters(verifyTypedFields(objQuery))
  }

  const verifyTypedFields = (fields) => {
    return fields.filter((field) => field.value)
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <CustomRangePicker
              label="Período do Cadastro: "
              value={dates}
              setValue={setDates}
              inputReadOnly={true}
            />
            <InputMask
              variation="secondary"
              label="CPF:"
              mask="999.999.999-99"
              value={cpf}
              setValue={setCpf}
              hasError={errors.cpf}
              msgError={errors.cpf}
            />
            <InputText
              variation="secondary"
              label="Nome:"
              value={name}
              setValue={setName}
              hasError={errors.name}
              msgError={errors.name}
              onlyLetter
              maxLength='100'
            />
            <SelectValidator
              setValidator={setValidator}
              validator={validator}
            />
            <SelectComponent
              variation="secondary"
              labelDefaultOption="Selecione"
              label="Status:"
              value={status}
              setValue={setStatus}
              options={[
                { label: 'Todos', value: 'ALL' },
                { label: 'Pendente', value: 'P' },
                { label: 'Em análise', value: 'EA' },
              ]}
            />
          </div>
          {typedData() && (
            <BtnGroup>
              <OutlineButton
                type="button"
                variation="red"
                small
                onClick={setInitialStates}
              >
                Limpar Filtro
              </OutlineButton>
              <ButtonPrimary type="submit" small>
                Filtrar Resultados
              </ButtonPrimary>
            </BtnGroup>
          )}
        </form>
      </Container>
      <TablePatients orders={orders} setOrders={setOrders} filters={filters} />
    </>
  )
}

export default Filter
