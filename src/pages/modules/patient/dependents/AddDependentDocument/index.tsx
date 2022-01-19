import React, { useMemo } from 'react'
import { parse, differenceInYears } from 'date-fns'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'

import { MajorAge } from './containers/MajorAge'
import { MinorAge } from './containers/MinorAge'
import { useLocation } from 'react-router'

interface AddDependentDocumentProps {
  id: number
  birthdate: string
  cpf: string
}

export const AddDependentDocument: React.FC<AddDependentDocumentProps> = () => {
  const location = useLocation()

  const { dependent } = location.state

  const { id, birthdate, cpf } = dependent

  const isMinorAge = useMemo(() => {
    console.log(birthdate)

    const dateParsed = parse(birthdate, 'dd/MM/yyyy', new Date())
    const age = differenceInYears(new Date(), dateParsed)

    return age < 18
  }, [birthdate])

  return (
    <DefaultLayout title="Dependentes">
      {isMinorAge ? <MinorAge dependent={{ id, cpf }} /> : <></>}
    </DefaultLayout>
  )
}
