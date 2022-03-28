import {
  OPERATOR_REPORTS_AUTHORIZATION,
  OPERATOR_REPORTS_BILLING_STATEMENT,
  OPERATOR_REPORTS_PATIENT_ANALYTIC,
} from '@/routes/constants/namedRoutes/routes'
// import { LISTAR_LOG_VALIDACOES } from '@/constants/permissions'

// export const OptionsPermission = [
//   {
//     value: LISTAR_LOG_VALIDACOES,
//     label: 'Autorizações',
//     path: OPERATOR_REPORTS_AUTHORIZATION,
//   },
// ]

export const reportOptions = [
  {
    value: 'autorizacoes',
    label: 'Autorizações',
    path: OPERATOR_REPORTS_AUTHORIZATION,
  },
  {
    value: 'billingStatement',
    label: 'Analítico de Faturamento',
    path: OPERATOR_REPORTS_BILLING_STATEMENT,
  },
  {
    value: 'patientAnalytic',
    label: 'Analítico de Paciente',
    path: OPERATOR_REPORTS_PATIENT_ANALYTIC,
  },
]
