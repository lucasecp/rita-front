import React, { useMemo } from 'react'
import { parse, differenceInYears } from 'date-fns'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { MajorAge } from './containers/MajorAge'
import { MinorAge } from './containers/MinorAge'

import { useHistory, useLocation } from 'react-router-dom'
import { DIRECTOR_PLAN_MANAGMENT } from '@/routes/constants/namedRoutes/routes'

export interface DependentData {
  dependent: {
    id: number
    birthdate: string
    cpf: string
  }
}

export const SeeOneDependent: React.FC = () => {
  const location = useLocation<DependentData>()
  const history = useHistory()

  const { dependent } = location.state

  const { id, birthdate, cpf } = dependent

  const isMinorAge = useMemo(() => {
    const dateParsed = parse(birthdate, 'dd/MM/yyyy', new Date())
    const age = differenceInYears(new Date(), dateParsed)

    return age < 18
  }, [birthdate])

  if (!location.state) {
    history.push(DIRECTOR_PLAN_MANAGMENT)
    return <></>
  }

  return (
    <DefaultLayout title="Visualizar informações de dependente">
      {isMinorAge ? (
        <MinorAge dependentData={{ id, birthdate, cpf }} />
      ) : (
        <MajorAge dependentData={{ id, birthdate, cpf }} />
      )}
    </DefaultLayout>
  )
}
