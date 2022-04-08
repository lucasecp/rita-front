import { useMemo } from 'react'
import { parse, differenceInYears } from 'date-fns'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { MajorAge } from './containers/MajorAge'
import { MinorAge } from './containers/MinorAge'

import { useLocation } from 'react-router-dom'

interface PersonalDatas {
  name: string
  cpf: string
  gender: string
  birthdate: string
  phone: string
  email: string
  status: string
  income: string
}

interface Address {
  cep: string
  uf: string
  city: string
  address: string
  number: string
  district: string
  complement: string
}

interface SituationType {
  plan: {
    name: string
    startDate: string
    endDate: string
  }
  table: string
}

interface DependentLocation {
  dependent: {
    personalDatas: PersonalDatas
    address: Address
    situation: SituationType
  }
  dependentId: number
}

export const EditDependent: React.FC = () => {
  const location = useLocation<DependentLocation>()

  const { dependent, dependentId } = location.state

  const dependentBirthdate = dependent.personalDatas.birthdate

  const isMinorAge = useMemo(() => {
    const dateParsed = parse(dependentBirthdate, 'dd/MM/yyyy', new Date())
    const age = differenceInYears(new Date(), dateParsed)

    return age < 18
  }, [dependentBirthdate])

  return (
    <DefaultLayout title="Editar informações de dependente">
      {isMinorAge ? (
        <MinorAge dependent={dependent} dependentId={dependentId} />
      ) : (
        <MajorAge dependent={dependent} dependentId={dependentId} />
      )}
    </DefaultLayout>
  )
}
