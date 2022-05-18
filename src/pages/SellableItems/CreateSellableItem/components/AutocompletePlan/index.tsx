import apiAdmin from '@/services/apiAdmin'
import { useEffect, useState } from 'react'
import { plansFromApi } from './adapters/fromApi'
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
      Loading.turnOn()
      try {
        const { data } = await apiAdmin.get('/itens-vendaveis/plano')

        const planMapped = plansFromApi(data)

        setPlanOptions(planMapped)
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }

    listOfPlans()
  }, [plan.label])

  useEffect(() => {
    onGetPlan(plan)
  }, [plan.value])

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
