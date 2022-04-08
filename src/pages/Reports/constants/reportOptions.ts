import {
  OPERATOR_REPORTS_AUTHORIZATION,
  OPERATOR_REPORTS_BILLING_STATEMENT,
  OPERATOR_REPORTS_PATIENT_ANALYTIC,
} from '@/routes/constants/namedRoutes/routes'

import { permissions } from '@/constants/permissions'

export const reportOptions = [
  {
    value: 'autorizacoes',
    label: 'Autorizações',
    path: OPERATOR_REPORTS_AUTHORIZATION,
    permission: permissions.LISTAR_LOG_VALIDACOES,
  },
  {
    value: 'billingStatement',
    label: 'Analítico de Faturamento',
    path: OPERATOR_REPORTS_BILLING_STATEMENT,
    permission: permissions.LISTAR_LOG_FATURAMENTO,
  },
  {
    value: 'patientAnalytic',
    label: 'Analítico de Paciente',
    path: OPERATOR_REPORTS_PATIENT_ANALYTIC,
    permission: permissions.LISTAR_BENEFICIARIOS,
  },
]
