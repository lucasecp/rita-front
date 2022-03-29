import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CustomRangePicker from '@/components/Form/CustomRangePicker'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import { Select } from '@/components/Form/Select'
import clearFormat from '@/helpers/clear/SpecialCaracteres'
import convertDate from '@/helpers/convertDateToIso'
import useQuery from '@/hooks/useQuery'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import TablePatients from '../TablePatients'
import SelectValidator from './SelectValidator'
import { Container, BtnGroup } from './styles'

const Filter = () => {
  const query = useQuery()
  const history = useHistory()
  const REGISTERDATES =
    !query.get('dataCadastroInicio') || !query.get('dataCadastroFim')
      ? []
      : [
          moment(String(query.get('dataCadastroInicio'))),
          moment(String(query.get('dataCadastroFim'))),
        ]
  const VALIDATIONDATES =
    !query.get('dataCadastroInicio') || !query.get('dataCadastroFim')
      ? []
      : [
          moment(String(query.get('dataCadastroInicio'))),
          moment(String(query.get('dataCadastroFim'))),
        ]
  const CPF = query.get('cpf') || ''
  const NAME = query.get('nome') || ''
  const VALIDATOR = query.get('idValidador') || ''
  const STATUS = query.get('status') || ''

  const [registerDates, setRegisterDates] = useState(REGISTERDATES)
  const [validationDates, setvalidationDates] = useState(VALIDATIONDATES)
  const [cpf, setCpf] = useState(CPF)
  const [name, setName] = useState(NAME)
  const [validator, setValidator] = useState(VALIDATOR)
  const [status, setStatus] = useState(STATUS)
  const [errors, setErrors] = useState({})
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState([])
  const [submited, setSubmited] = useState(false)

  const objQuery = [
    { name: 'nome', value: name },
    { name: 'cpf', value: clearFormat(cpf) },
    { name: 'status', value: status === 'ALL' ? '' : status },
    { name: 'dataCadastroInicio', value: convertDate(registerDates[0]) },
    { name: 'dataCadastroFim', value: convertDate(registerDates[1]) },
    { name: 'dataValidacaoInicio', value: convertDate(validationDates[0]) },
    { name: 'dataValidacaoFim', value: convertDate(validationDates[1]) },
    { name: 'idValidador', value: validator === 'ALL' ? '' : validator },
  ]

  const verifyTypedFields = (fields) => {
    return fields.filter((field) => field.value)
  }

  useEffect(() => {
    setFilters(verifyTypedFields(objQuery))
  }, [])

  useEffect(() => {
    if (!registerDates[0] && !registerDates[1] && submited)
      setFilters(verifyTypedFields(objQuery))
  }, [registerDates])

  useEffect(() => {
    if (!validationDates[0] && !validationDates[1])
      setFilters(verifyTypedFields(objQuery))
  }, [validationDates])

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
    setvalidationDates([])
    setRegisterDates([])
    setErrors({})
    setOrders([])
    setFilters([])
    history.push('?page=1&limit=10&orderBy=dataValidacao&order=DESC')
    setSubmited(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmited(true)

    if (Object.keys(validateFields()).length) return

    history.push('?page=1&limit=10&orderBy=dataValidacao&order=DESC')
    setFilters(verifyTypedFields(objQuery))
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <CustomRangePicker
              label="Período do Cadastro: "
              value={registerDates}
              setValue={setRegisterDates}
              inputReadOnly={true}
            />
            <CustomRangePicker
              label="Período de Validação: "
              value={validationDates}
              setValue={setvalidationDates}
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
              maxLength="100"
            />
            <SelectValidator
              setValidator={setValidator}
              validator={validator}
            />
            <Select
              variation="secondary"
              // labelDefaultOption="Selecione" //
              label="Status:"
              value={status}
              setValue={setStatus}
              options={[
                { label: 'Todos', value: 'ALL' },
                { label: 'Pendente', value: 'P' },
                { label: 'Inativo', value: 'I' },
                { label: 'Em análise', value: 'EA' },
                { label: 'Aprovado', value: 'A' },
                { label: 'Negado', value: 'N' },
              ]}
            />

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
          </div>
        </form>
      </Container>
      <TablePatients orders={orders} setOrders={setOrders} filters={filters} />
    </>
  )
}

export default Filter
