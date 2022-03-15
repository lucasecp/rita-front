import { ButtonOneBorder  } from '@/components/Button/OneBorder'
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
import TableReport from '../ReportPreview'
import formatArray from '../helpers/formatMultSelectArray'

import MultSelectValidator from './MultSelectValidator'
import { OPERATOR_REPORTS } from '@/routes/constants/namedRoutes/routes'
import differenceDays from '../helpers/differenceDays'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { queryFilterString, queryOrderString } from '../helpers/queryString'
import downloadFile from '@/helpers/downloadFile'

const Filter = () => {
  const [validators, setvalidators] = useState([])
  const [errors, setErrors] = useState({})
  const [columns, setColumns] = useState(staticColumns)
  const [patients, setPatients] = useState({})
  const [submitGenerateReport, setSubmitGenerateReport] = useState(false)
  const [someFieldWasTyped, setSomeFieldWasTyped] = useState(false)


  const hasFieldErrors = () => {

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
            orders,
          )}${queryFilterString(
            verifyTypedFields(objQuery),
          )}&tipoRelatorio=${fileType}`,
          {
            responseType: 'arraybuffer',
          },
        ),
        {
          pending: 'Gerando arquivo ...',
          success: 'Arquivo gerado',
          error: 'Erro ao gerar relatório',
        },
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



