import CustomMultiSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import apiAdmin from '@/services/apiAdmin'
import React, { useEffect, useState, SetStateAction, Dispatch } from 'react'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import InsertRqeNumber from './messages/insertRqeNumber/index'
import { useValidator } from '../../hooks/useValidator'
import { ErrorsRegisterI } from '../../types'

// Será mostrado uma modal caso a especialidade requerer inscrição

interface SpecialtysProps {
  specialtys: MultiSelectOption[]
  setSpecialtys: Dispatch<SetStateAction<MultiSelectOption[]>>
  setErrors: Dispatch<SetStateAction<ErrorsRegisterI>>
  setSpecialtysSelected: Dispatch<SetStateAction<MultiSelectOption[]>>
  errors: any
  color?: string
  fieldsValues?: any
  [x: string]: any
}

export const MultSelectSpecialty: React.FC<SpecialtysProps> = ({
  setSpecialtys,
  setErrors,
  setSpecialtysSelected,
  specialtys,
  errors,
  color,
  fieldsValues,
  ...rest
}) => {
  const [specialtysOptions, setSpecialtysOptions] = useState<
    MultiSelectOption[]
  >([])

  const { showMessage } = useModal()
  const { hasErrors } = useValidator()

  const mapSpecialtys = (
    array: {
      idEspecialidade: string
      descricao: string
      requerInscricao: string
    }[],
  ) => {
    if (!array) return []

    return array
      .map((obj) => ({
        id: obj.idEspecialidade,
        name: obj.descricao,
        rqeRequired: obj.requerInscricao,
      }))
      .filter((specialty) => specialty.id && specialty.name)
  }

  const idIssuingAgenceySelected = window.localStorage.getItem('@rita-issuingAgencySelected')

  useEffect(() => {
    const getSpecialtys = async () => {
      try {
        const { idIssuingAgencySelected } = JSON.parse(idIssuingAgenceySelected)
        const { data } = await apiAdmin.get(`/especialidade?idOrgaoEmissor=${idIssuingAgencySelected}`)
        const dataMapped = mapSpecialtys(data?.especialidade)

        if (!dataMapped.length) {
          return setSpecialtysOptions([])
        }

        setSpecialtysOptions(dataMapped)
      } catch ({ response }) { }
    }

    getSpecialtys()
  }, [idIssuingAgenceySelected])

  const onChange = (values: MultiSelectOption[], value?: MultiSelectOption) => {
    if (value?.rqeRequired) {
      return showMessage(InsertRqeNumber, {
        setSpecialtys,
        currentSpecialty: value,
      })
    }
    setSpecialtysSelected([value])
    hasErrors({...fieldsValues, specialtys: value })
    setSpecialtys(values)
  }

  return (
    <Container>
      <h1>Especialidades</h1>
      <section>
        <CustomMultiSelect
          value={specialtys}
          setValue={setSpecialtys}
          variation="secondary"
          color={color}
          options={specialtysOptions}
          hasError={!!errors?.specialtys}
          messageError={errors?.specialtys}
          name="specialtys"
          onSelect={(values: MultiSelectOption[], v?: MultiSelectOption) =>
            onChange(values, v)
          }
          {...rest}
        />
      </section>
    </Container>
  )
}
