import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import { AutoComplete } from 'antd'
import { Container } from './styles'
import { CompleteProps } from './types/index'
/** Components */
import InputText from '@/components/Form/InputText'
import apiAdmin from '@/services/apiAdmin'
import ItemPatient from './itemPatient'

const InputAutoCompleteSpecialist: React.FC<CompleteProps> = ({
  value,
  hasErrors,
  setValue,
}) => {
  const ENDPOINT_PATIENT = `/medico/agenda-pessoal`
  const patients = JSON.parse(
    window.localStorage.getItem('@Rita/InputAutoCompletePatient/patients'),
  )
  const idClinic = JSON.parse(
    window.localStorage.getItem('@Rita/InputAutoCompleteClinic/IdClinic'),
  )

  const [options, setOptions] = useState<any[]>([])
  const [patient, setPatient] = useState([])

  /** @description Remove objeto duplicado. 👇 */
  const removeObjectDuplicate = (filteredArray: any, data: any[]) => {
    const uniqueArray = new Set()
    filteredArray = data.filter((item) => {
      const duplicatePatientScheduler = uniqueArray.has(item.idPatient)
      uniqueArray.add(item.idPatient)
      return !duplicatePatientScheduler
    })
    if (filteredArray.length === 1) {
      setValue(filteredArray[0].name)
    }
    setPatient(filteredArray)
  }

  const getPatients = async () => {
    const result = await apiAdmin.get(ENDPOINT_PATIENT)
    const filteredArray: any[] = []
    result.data = result?.data?.map((item: any) => {
      return {
        idPatient: item.paciente.idPaciente,
        name: item.paciente.nome,
      }
    })

    if (patients) {
      removeObjectDuplicate(filteredArray, patients)
      window.localStorage.setItem(
        '@Rita/InputAutoCompletePatient/patients',
        JSON.stringify(
          patients.map((item) => {
            return {
              ...item,
              isPatientsFilted: false,
            }
          }),
        ),
      )
    } else {
      removeObjectDuplicate(filteredArray, result.data)
    }
  }

  React.useEffect(() => {
    getPatients()
  }, [])

  React.useEffect(() => {
    if (patients && patients[0].isPatientsFilted) getPatients()
    if (!idClinic) getPatients()
  }, [patients, idClinic])

  const searchResult = (query: any) => {
    let result = patient.filter((item) => {
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
        label: <ItemPatient patient={value.name} />,
      }
    })

    setOptions(value ? result : [])
  }

  const onSelect = async (value: any) => {
    const result = await apiAdmin.get(ENDPOINT_PATIENT)
    result?.data?.filter((item: any) => {
      if (item.paciente.nome === value) {
        window.localStorage.setItem(
          '@Rita/InputAutoCompletePatient/IdPatient',
          JSON.stringify(Number(item.paciente.idPaciente)),
        )
      }
    })
  }

  const removeLocalStoragePatient = () => {
    window.localStorage.removeItem('@Rita/InputAutoCompletePatient/IdPatient')
  }

  const onClear = () => {
    removeLocalStoragePatient()
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
          label="Paciente:"
          onBlur={hasErrors}
          onFocus={() => setOptions([])}
        />
      </AutoComplete>
    </Container>
  )
}
export default InputAutoCompleteSpecialist
