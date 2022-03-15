import apiAdmin from '@/services/apiAdmin'
import { useEffect, useState } from 'react'
import { Container, ListSuggestions } from './styles'
import { plansFromApi } from './adapters/plansFromApi'
import { useLoading } from '@/hooks/useLoading'
import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'

interface AutocompletePlanProps {
  onGetPlan: (plan: AutocompleteOptions) => void
  error: string
}

export const AutocompletePlan: React.FC<AutocompletePlanProps> = ({
  onGetPlan,
  error,
}) => {
  const { Loading } = useLoading()

  const [planOptions, setPlanOptions] = useState<AutocompleteOptions[]>([])
  const [plan, setPlan] = useState<AutocompleteOptions>({
    label: '',
    value: 0,
  })

  useEffect(() => {
    const listOfPlans = async () => {
      try {
        const plansResponse = await apiAdmin.get(
          `/plano?limit=999&skip=0&nome=${plan.label}&status=P&status=A&status=S`,
        )

        const mappedResponse = plansFromApi(plansResponse.data.dados)

        setPlanOptions(mappedResponse)
        // setListRangeOfUseToSaveAndToCreateTable([])
        // setRegionalSelected('')
        // setUfs([])
        // setUfSelected('')
        // setCitiesSelected([])
      } catch (error) {
        console.log(error)
      }
    }
    listOfPlans()
  }, [plan.label])

  useEffect(() => {
    onGetPlan(plan)
  }, [plan.value])

  console.log(plan)

  return (
    <Autocomplete
      label="Código - Plano:"
      value={plan}
      setValue={setPlan}
      options={planOptions}
      setOptions={setPlanOptions}
      error={error}
    />
  )
}
