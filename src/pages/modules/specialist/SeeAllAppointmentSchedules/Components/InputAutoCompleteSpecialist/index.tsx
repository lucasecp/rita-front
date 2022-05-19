import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import { AutoComplete } from 'antd'
import { Container } from './styles'
import { CompleteProps } from './types/index'
/** Components */
import InputText from '@/components/Form/InputText'
import apiAdmin from '@/services/apiAdmin'
import ItemSpecialty from './itemSpecialty'
import { useAuth } from '@/hooks/login'

const InputAutoCompleteSpecialist: React.FC<CompleteProps> = ({
  value,
  hasErrors,
  setValue,
}) => {
  const { user } = useAuth()
  const ENDPOINT_SPECIALIST = `clinica/${user.idClinica}/agenda-pessoal`

  const [options, setOptions] = useState<any[]>([])
  const [specialist, setSpecialist] = useState([])

  const getAllSpecialist = async () => {
    let result = await apiAdmin.get(ENDPOINT_SPECIALIST)
    result.data = result?.data?.map((item: any) => {
      return {
        idSpecialist: item.medico.idMedico,
        name: item.medico.nome,
      }
    })

    /** @description Remove objeto duplicado. 👇 */
    const uniqueArray = new Set()
    const filteredArray = result.data.filter((item) => {
      const duplicateSpecialistScheduler = uniqueArray.has(item.idSpecialist)
      uniqueArray.add(item.idSpecialist)
      return !duplicateSpecialistScheduler
    })

    setSpecialist(filteredArray)
  }

  React.useEffect(() => {
    getAllSpecialist()
  }, [])

  const searchResult = (query: any) => {
    let result = specialist.filter((item) => {
      if (
        String(item.name)
          .toLowerCase()
          .trim()
          .includes(String(query).toLowerCase().trim())
      ) {
        return item
      }
    })

    result = result.map((value: any) => {
      return {
        value: value.name,
        label: <ItemSpecialty specialist={value.name} />,
      }
    })

    setOptions(value ? result : [])
  }

  /** @description Retorna todos os pacientes vinculados ao especialista */
  const getPatientsBySpecialist = (data: any[], idSpecialist: number) => {
    const patients = data.map((item) => {
      return {
        idSpecialist: item.medico.idMedico,
        patient: {
          idPatient: item.paciente.idPaciente,
          name: item.paciente.nome,
        },
      }
    })
    const resultFilter = patients.filter(
      (item) => Number(item.idSpecialist) === idSpecialist,
    )
    return resultFilter.map((item) => {
      return {
        idPatient: item.patient.idPatient,
        name: item.patient.name,
        isPatientsFilted: true,
      }
    })
  }

  const onSelect = async (value: any) => {
    let result = await apiAdmin.get(ENDPOINT_SPECIALIST)

    result?.data?.filter((item: any) => {
      if (item.medico.nome === value) {
        window.localStorage.setItem(
          '@Rita/InputAutoCompleteSpecialist/IdSpecialist',
          JSON.stringify(item.medico.idMedico),
        )
        window.localStorage.setItem(
          '@Rita/InputAutoCompletePatient/patients',
          JSON.stringify(
            getPatientsBySpecialist(result.data, item.medico.idMedico),
          ),
        )
      }
    })
  }

  const removeLocalStorageSpecialist = () => {
    window.localStorage.removeItem(
      '@Rita/InputAutoCompleteSpecialist/IdSpecialist',
    )
    window.localStorage.removeItem('@Rita/InputAutoCompletePatient/patients')
  }

  const onClear = () => {
    removeLocalStorageSpecialist()
  }

  return (
    <Container>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        options={options}
        onSearch={(value) => searchResult(value)}
        onChange={(value) => setValue(value)}
        onSelect={(value) => onSelect(value)}
        onClear={onClear}
        notFoundContent="Nenhum resultado."
        allowClear
        maxLength={100}
        value={value}
      >
        <InputText
          variation="secondary"
          label="Clínica:"
          onBlur={hasErrors}
          onFocus={() => setOptions([])}
        />
      </AutoComplete>
    </Container>
  )
}
export default InputAutoCompleteSpecialist
