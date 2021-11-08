import { OPERATOR_REPORTS_AUTHORIZATION } from '@/routes/constants/namedRoutes/routes'
import { LISTAR_LOG_VALIDACOES } from '@/constants/permissions'

export const OptionsPermission = [
  {
    value: LISTAR_LOG_VALIDACOES,
    label: 'Autorizações',
    path: OPERATOR_REPORTS_AUTHORIZATION,
  },
]
