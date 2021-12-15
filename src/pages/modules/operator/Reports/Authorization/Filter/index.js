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
import { toast } from '@/styles/components/toastify'
import {
  columns as staticColumns,
  status as staticStatus,
} from '../static/columns'
import TableReport from '../TableReport'
import formatArray from '../helpers/formatMultSelectArray'

import MultSelectValidator from './MultSelectValidator'
import { BtnGroup, Container, Controls } from './styles'
import { OPERATOR_REPORTS } from '@/routes/constants/namedRoutes/routes'
import differenceDays from '../helpers/differenceDays'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { queryFilterString, queryOrderString } from '../helpers/queryString'
import downloadFile from '@/helpers/downloadFile'
import downloadXls from '../helpers/downloadXls'
import orderColumnsToApi from '../helpers/orderColumnsToApi'
import formatObjectFromApi from '../helpers/formatObjectFromApi'

const Filter = () => {
  const [registerDates, setRegisterDates] = useState([])
  const [validationDates, setValidationDates] = useState([])
  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [validators, setvalidators] = useState([])
  const [status, setStatus] = useState([])
  const [errors, setErrors] = useState({})
  const [orders, setOrders] = useState([])
  const [filters, setFilters] = useState([])
  const [submitGeneratePreview, setSubmitGeneratePreview] = useState(false)
  const [fileType, setFileType] = useState('')
  const [columns, setColumns] = useState(staticColumns)
  const [patients, setPatients] = useState({})
  const [submitGenerateReport, setSubmitGenerateReport] = useState(false)
  const [someFieldWasTyped, setSomeFieldWasTyped] = useState(false)

  const history = useHistory()
  const { Loading } = useLoading()

  useEffect(() => {
    if (!registerDates[0] && !registerDates[1]) {
      setErrors((errors) => {
        return { ...errors, registerDate: '' }
      })
    }
  }, [registerDates])

  useEffect(() => {
    if (!validationDates[0] && !validationDates[1]) {
      setErrors((errors) => {
        return { ...errors, validationDate: '' }
      })
    }
  }, [validationDates])

  useEffect(() => {
    setSubmitGeneratePreview(false)
  }, [columns])

  useEffect(() => {
    if (
      registerDates.length ||
      validationDates.length ||
      validators.length ||
      name ||
      clearFormat(cpf) ||
      status.length ||
      columns.length
    ) {
      setSomeFieldWasTyped(true)
    } else {
      setSubmitGeneratePreview(false)
      setSomeFieldWasTyped(false)
    }
  }, [registerDates, validationDates, validators, name, cpf, status, columns])

  const objQuery = [
    { name: 'nome', value: name },
    { name: 'cpf', value: clearFormat(cpf) },
    { name: 'status', value: formatArray(status) },
    { name: 'dataCadastroInicio', value: convertDate(registerDates[0]) },
    { name: 'dataCadastroFim', value: convertDate(registerDates[1]) },
    { name: 'dataValidacaoInicio', value: convertDate(validationDates[0]) },
    { name: 'dataValidacaoFim', value: convertDate(validationDates[1]) },
    { name: 'idValidador', value: formatArray(validators) },
    { name: 'campos', value: orderColumnsToApi(columns) },
  ]

  const hasFieldErrors = () => {
    const cpfClear = String(clearFormat(cpf)).trim()
    const nameClear = String(name).trim()
    let hasError = false
    setErrors({})

    if (!someFieldWasTyped) {
      toast.warning('Informe pelo menos um filtro')
      return true
    }

    if (cpfClear.length < 3 && cpfClear) {
      setErrors((errors) => {
        return { ...errors, cpf: 'Informe 3 dígitos ou mais' }
      })
      hasError = true
    }
    if (!columns.length) {
      setErrors((errors) => {
        return { ...errors, columns: 'Informe pelo menos 1 coluna' }
      })
      hasError = true
    }

    if (differenceDays(registerDates[0], registerDates[1]) > 60) {
      setErrors((errors) => {
        return {
          ...errors,
          registerDate: 'Período de cadastro não pode ultrapassar 60 dias.',
        }
      })
      hasError = true
    }

    if (differenceDays(validationDates[0], validationDates[1]) > 60) {
      setErrors((errors) => {
        return {
          ...errors,
          validationDate: 'Período de validação não pode ultrapassar 60 dias.',
        }
      })
      hasError = true
    }

    if (nameClear.length < 3 && nameClear) {
      setErrors((errors) => {
        return { ...errors, name: 'Informe 3 letras ou mais' }
      })
      hasError = true
    }
    return hasError
  }

  const onPreview = async () => {
    if (hasFieldErrors()) return

    setFilters(verifyTypedFields(objQuery))

    try {
      Loading.turnOn()
      const response = await apiPatient.get(
        `/validacao-paciente?limit=10&skip=0${queryOrderString(
          orders
        )}${queryFilterString(verifyTypedFields(objQuery))}`
      )

      if (response.status === 200) {
        setSubmitGeneratePreview(true)
        setPatients(formatObjectFromApi(response.data))
      }
    } catch ({ response }) {
    } finally {
      Loading.turnOff()
    }
  }

  const onGenerateReport = async () => {
    if (hasFieldErrors()) {
      return
    }

    setSubmitGenerateReport(true)

    try {
      const response = await toast.promise(
        apiPatient.get(
          `/validacao-paciente-relatorio/documento?${queryOrderString(
            orders
          )}${queryFilterString(
            verifyTypedFields(objQuery)
          )}&tipoRelatorio=${fileType}`,
          {
            responseType: 'arraybuffer',
          }
        ),
        {
          pending: 'Gerando arquivo ...',
          success: 'Arquivo gerado',
          error: 'Erro ao gerar relatório',
        }
      )
      if (response.status === 200) {
        if (fileType === 'xlsx') {
          const blobReportPdf = new Blob([response.data], {
            type: 'application/vnd.ms-excel;charset=utf-8',
          })
          downloadFile(blobReportPdf, '_Autorizacoes', 'xls')
        }

        if (fileType === 'pdf') {
          const blobReportPdf = new Blob([response.data], {
            type: 'application/pdf',
          })
          downloadFile(blobReportPdf, '_Autorizacoes', 'pdf')
        }
      }
    } catch ({ response }) {
    } finally {
      setSubmitGenerateReport(false)
    }
  }

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
            hasError={errors.registerDate}
            msgError={errors.registerDate}
          />
          <CustomRangePicker
            label="Período de Validação: "
            value={validationDates}
            setValue={setValidationDates}
            inputReadOnly={true}
            hasError={errors.validationDate}
            msgError={errors.validationDate}
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
            label="Status"
          />

          <CustomMultSelect
            value={columns}
            setValue={setColumns}
            options={staticColumns}
            label="Colunas"
            span="2"
            hasError={errors.columns}
            messageError={errors.columns}
          />
        </div>

        <Controls>
          <BtnGroup>
            <ButtonOneBorder
              variation="red"
              onClick={() => history.push(OPERATOR_REPORTS)}
            >
              Cancelar
            </ButtonOneBorder>

            <ButtonPrimary
              onClick={() => toast.warning('Informe pelo menos um filtro')}
              hidden={someFieldWasTyped}
              disabledWithEvents
            >
              Gerar prévia
            </ButtonPrimary>

            <OutlineButton onClick={onPreview} hidden={!someFieldWasTyped}>
              Gerar prévia
            </OutlineButton>
          </BtnGroup>

          <span hidden={!someFieldWasTyped}>
            <div>
              <h6>Escolha o tipo de arquivo:</h6>
              <RadioGroup onChange={({ target }) => setFileType(target.value)}>
                <RadioButton
                  label="PDF"
                  value="pdf"
                  checked={fileType === 'pdf'}
                />
                <RadioButton
                  label="XLS"
                  value="xlsx"
                  checked={fileType === 'xlsx'}
                />
              </RadioGroup>
            </div>
            <ButtonPrimary
              disabled={!fileType || submitGenerateReport}
              onClick={onGenerateReport}
            >
              Gerar relatório
            </ButtonPrimary>
          </span>
        </Controls>
      </Container>
      {submitGeneratePreview && (
        <TableReport
          patients={patients}
          setPatients={setPatients}
          orders={orders}
          setOrders={setOrders}
          filters={filters}
          columns={columns}
        />
      )}
    </>
  )
}

export default Filter
