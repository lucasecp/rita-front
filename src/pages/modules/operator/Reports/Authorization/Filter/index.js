import ButtonOneBorder from '@/components/Button/OneBorder'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import CustomRangePicker from '@/components/Form/CustomRangePicker'
import InputMask from '@/components/Form/InputMask'
import InputText from '@/components/Form/InputText'
import CustomMultSelect from '@/components/Form/MultSelect'
import clearFormat from '@/helpers/clear/SpecialCaracteres'
import convertDate from '@/helpers/convertDateToIso'
import RadioButton from '@/styles/components/RadioButton'
import { RadioGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { columns as staticColumns, status as staticStatus } from '../static'
import TableReport from '../TableReport'
import formatArray from '../helpers/formatMultSelectArray'

import MultSelectValidator from './MultSelectValidator'
import { BtnGroup, Container, Controls } from './styles'

const Filter = () => {

  const [registerDates, setRegisterDates] = useState([])
  const [validationDates, setvalidationDates] = useState([])
  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [validators, setvalidators] = useState([])
  const [status, setStatus] = useState([])
  const [errors, setErrors] = useState({})
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState([])
  const [submited, setSubmited] = useState(false)
  const [fileType, setFileType] = useState('')
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setFilters(verifyTypedFields(objQuery))
  }, [])

  const allFieldIsEmpty = () =>
    registerDates.length ||
    validationDates.length ||
    validators.length ||
    name ||
    clearFormat(cpf) ||
    status.length

  useEffect(() => {
    if (!registerDates[0] && !registerDates[1] && submited)
      setFilters(verifyTypedFields(objQuery))
  }, [registerDates])

  useEffect(() => {
    if (!validationDates[0] && !validationDates[1] && submited)
      setFilters(verifyTypedFields(objQuery))
  }, [validationDates])

  const objQuery = [
    { name: 'nome', value: name },
    { name: 'cpf', value: clearFormat(cpf) },
    { name: 'status', value: formatArray(status) },
    { name: 'dataCadastroInicio', value: convertDate(registerDates[0]) },
    { name: 'dataCadastroFim', value: convertDate(registerDates[1]) },
    { name: 'dataValidacaoInicio', value: convertDate(validationDates[0]) },
    { name: 'dataValidacaoFim', value: convertDate(validationDates[1]) },
    { name: 'idValidador', value: formatArray(validators) },
    { name: 'colunas', value: formatArray(columns) }
  ]

  const hasFieldErrors = () => {
    const newCpf = String(clearFormat(cpf)).trim()
    const newName = String(name).trim()
    let hasError = false
    setErrors({})

    if(!allFieldIsEmpty()){
      toast.warn('Informe pelo menos um filtro')
      return true
    }

    if (newCpf.length < 3 && newCpf) {
      setErrors({...errors, cpf: 'Informe 3 dígitos ou mais'})
      hasError = true
    }

    if (newName.length < 3 && newName) {
      setErrors({...errors, name:'Informe 3 letras ou mais'})
      hasError = true
    }
    return hasError
  }

  // const setInitialStates = () => {
  //   setName('')
  //   setCpf('')
  //   setvalidators('')
  //   setStatus('')
  //   setvalidationDates([])
  //   setRegisterDates([])
  //   setErrors({})
  //   setOrders([])
  //   setFilters([])
  //   setSubmited(false)
  // }

  const onPreview = async () => {

    setSubmited(true)

    if (hasFieldErrors()) return


    setFilters(verifyTypedFields(objQuery))
  }

  console.log(filters);
  const verifyTypedFields = (fields) => {
    return fields.filter((field) => field.value)
  }

  return (
    <>
      <Container>
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
          <MultSelectValidator
            setValidators={setvalidators}
            validators={validators}
          />
          <CustomMultSelect
           value={status}
           setValue={setStatus}
           options={staticStatus}
           label="Status" />

          <CustomMultSelect
          value={columns}
          setValue={setColumns}
          options={staticColumns}
           label="Colunas" span="2" />
        </div>

        <Controls>
          <BtnGroup>
            <ButtonOneBorder variation="red" >
              Cancelar
            </ButtonOneBorder>
            <OutlineButton onClick={onPreview} disabledCss={!allFieldIsEmpty()}>Gerar prévia</OutlineButton>
          </BtnGroup>

          { !!allFieldIsEmpty() && (
            <span>
              <div>
                <h6>Escolha o tipo de arquivo:</h6>
                <RadioGroup
                  onChange={({ target }) => setFileType(target.value)}
                >
                  <RadioButton
                    label="PDF"
                    value="pdf"
                    checked={fileType === 'PDF'}
                  />
                  <RadioButton
                    label="XLS"
                    value="xls"
                    checked={fileType === 'XLS'}
                  />
                </RadioGroup>
              </div>
              <ButtonPrimary disabled={!fileType}>Gerar relatório</ButtonPrimary>
            </span>
          )}
        </Controls>
      </Container>
      <TableReport orders={orders} setOrders={setOrders} filters={filters} />
    </>
  )
}

export default Filter
