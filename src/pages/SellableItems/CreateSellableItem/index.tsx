import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import apiAdmin from '@/services/apiAdmin'
import { FILTER_SELLABLE_ITEMS } from '@/routes/constants/namedRoutes/routes'
import { Container } from './styles'

import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'

import ButtonPrimary from '@/components/Button/Primary'
import OutilineButton from '@/components/Button/Outline'
import MultSelectServices from './components/MultSelectPlan'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { toast } from '@/styles/components/toastify'

import { RangeOfUse } from './components/RangeOfUse'
import InputCurrency from './components/InputCurrency'
import { AutocompletePlan } from './components/AutocompletePlan'
import { CancelSaving } from './messages/CancelSaving'
// import { mapRangesToSendApi } from './components/RangeOfUse/helpers/mapDataToSendApi'

// import {
//   mapRegionalDataComingFromApi,
//   mapUfsDataComingFromApi,
//   mapCitiesDataComingFromApi,
// } from './components/RangeOfUse/helpers/mapDataComingFromApi'

interface PlanOptions {
  value: number
  label: string
}

export const CreateSellableItem: React.FC = () => {
  const history = useHistory()
  const { Loading } = useLoading()
  const { showMessage } = useModal()

  // @ts-ignore
  const [plan, setPlan] = useState<PlanOptions>({})

  const [fieldWasChanged, setFieldWasChanged] = useState<number>(0)

  const [priceError, setPriceError] = useState<string>('')
  const [planIdError, setPlanIdError] = useState<string>('')
  // const [rangesOfUseError, setRangesOfUseError] = useState(false)

  // const [regionals, setRegionals] = useState([])
  // const [ufs, setUfs] = useState([])
  // const [city, setCity] = useState([])

  // const [regionalSelected, setRegionalSelected] = useState('')
  // const [ufSelected, setUfSelected] = useState('')
  // const [citiesSelected, setCitiesSelected] = useState([])

  const [priceToSave, setPriceToSave] = useState<string | number>(0)
  // const [
  //   listRangeOfUseToSaveAndToCreateTable,
  //   setListRangeOfUseToSaveAndToCreateTable,
  // ] = useState([])

  // useEffect(() => {
  //   // setUfSelected('')

  //   const onRegionals = async () => {
  //     if (plan.value) {
  //       try {
  //         Loading.turnOn()

  //         const response = await apiAdmin.post(
  //           `/itens-vendaveis/regional?idPlano=${plan.value}`,
  //           [],
  //         )

  //         const RegionalMapped = mapRegionalDataComingFromApi(response.data)

  //         // setRegionals(RegionalMapped)
  //       } catch (error) {
  //         console.log(error)
  //       } finally {
  //         Loading.turnOff()
  //       }
  //     } else {
  //       // setRegionals([])
  //     }
  //   }
  //   onRegionals()
  // }, [plan.value])

  // useEffect(() => {
  //   const onGetUfs = async () => {
  //     setUfSelected('')

  //     try {
  //       Loading.turnOn()

  //       const regionalToCallApi = regionals.filter(
  //         (item) => item.label === regionalSelected,
  //       )[0].index

  //       const response = await apiAdmin.post(
  //         `/itens-vendaveis/uf?idPlano=${plan.value}&regional=${regionalToCallApi}`,
  //         [],
  //       )

  //       const UfsMapped = mapUfsDataComingFromApi(response.data)

  //       setUfs(UfsMapped)
  //       // setRangesOfUse(rangesOfUseMapped)
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }

  //   onGetUfs()
  // }, [regionalSelected])

  // useEffect(() => {
  //   const onGetCity = async () => {
  //     try {
  //       Loading.turnOn()

  //       const ufToCallApi = ufs.filter((item) => item.label === ufSelected)[0]
  //         .index

  //       const { data } = await apiAdmin.post(
  //         `/itens-vendaveis/municipio?uf=${ufToCallApi}`,
  //         [],
  //       )

  //       const rangesOfUseMapped = mapCitiesDataComingFromApi(data)

  //       setCity(rangesOfUseMapped)
  //       // setListRangeOfUse(rangesOfUseMapped)
  //       // setRangesOfUse(rangesOfUseMapped)
  //     } catch (error) {
  //       console.log(error)
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }
  //   onGetCity()
  // }, [ufSelected])

  useEffect(() => {
    setFieldWasChanged(fieldWasChanged + 1)
  }, [
    // listRangeOfUseToSaveAndToCreateTable,
    priceToSave,
    plan.value,
  ])

  const onSave = async () => {
    // if (!listRangeOfUseToSaveAndToCreateTable.length) {
    //   setRangesOfUseError(true)
    // } else {
    //   setRangesOfUseError(false)
    // }

    if (priceToSave < 0.01) {
      setPriceError('O valor é obrigatório')
    } else {
      setPriceError('')
    }

    if (!plan.value) {
      setPlanIdError('O plano é obrigatório')
    } else {
      setPlanIdError('')
    }

    if (
      // !listRangeOfUseToSaveAndToCreateTable.length ||
      // @ts-ignore
      priceToSave.length < 4 ||
      !plan.value
    )
      return scrollTo(0, 0)

    try {
      Loading.turnOn()

      await apiAdmin.post('itens-vendaveis', {
        idPlano: plan.value,
        preco:
          // @ts-ignore
          priceToSave.slice(0, priceToSave.length - 2) +
          ',' +
          // @ts-ignore
          priceToSave.slice(-2),
        locaisVenda: [
          {
            uf: {
              id: 1,
              sigla: 'AC',
              nome: 'Acre',
            },
            regional: {
              id: 3,
              nome: 'Norte',
            },
            municipios: [],
          },
        ],
      })
      // mapRangesToSendApi(listRangeOfUseToSaveAndToCreateTable),

      toast.success('Cadastro realizado com sucesso.')
      history.push(FILTER_SELLABLE_ITEMS)
    } catch ({ response }) {
      toast.error('Erro ao tentar salvar')
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (fieldWasChanged > 2) {
      return showMessage(CancelSaving)
    }
    history.push(FILTER_SELLABLE_ITEMS)
  }

  return (
    <>
      <DefaultLayout title="Itens Vendáveis - Cadastro">
        <Container>
          <main>
            <AutocompletePlan
              onGetPlan={setPlan}
              error={!plan.value ? planIdError : ''}
            />
            <MultSelectServices plan={plan} />
            <RangeOfUse
              // id={plan.value}
              label="Local de Venda*: "
              // messageError={rangesOfUseError}
              // hasError={!!rangesOfUseError}
              // regionals={regionals}
              // setRegionals={setRegionals}
              // ufs={ufs}
              // setUfs={setUfs}
              // city={city}
              // setCity={setCity}
              // regionalSelected={regionalSelected}
              // setRegionalSelected={setRegionalSelected}
              // ufSelected={ufSelected}
              // setUfSelected={setUfSelected}
              // citiesSelected={citiesSelected}
              // setCitiesSelected={setCitiesSelected}
              // listRangeOfUseToSaveAndToCreateTable={
              //   listRangeOfUseToSaveAndToCreateTable
              // }
              // setListRangeOfUseToSaveAndToCreateTable={
              //   setListRangeOfUseToSaveAndToCreateTable
              // }
              // @ts-ignore
              disabled
            />
            <div id="containerInput">
              <InputCurrency
                label="Valor:"
                required
                value={priceToSave}
                setValue={setPriceToSave}
                messageError={priceError}
                hasError={!!priceError}
              />
            </div>
          </main>

          <footer>
            <OutilineButton onClick={onCancel}>Cancelar</OutilineButton>
            <ButtonPrimary onClick={onSave}>Salvar</ButtonPrimary>
          </footer>
        </Container>
      </DefaultLayout>
    </>
  )
}
