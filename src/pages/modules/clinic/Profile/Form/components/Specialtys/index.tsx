import React from 'react'
import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'
import { ClinicProfileI } from '../../../types'
/** Styled */
import { Container } from './styles'
/** Context */
import { ClinicEditContext } from '../../../Context/ClinicEditContext'

interface FormClinicProfileI {
  data: ClinicProfileI
  setSpecialty: (data: MultiSelectOption[]) => void
}

const Specilty: React.FC<FormClinicProfileI> = (props: FormClinicProfileI) => {
  /** State */
  const [specialty, setSpecialty] = React.useState<MultiSelectOption[]>([])
  /** Context */
  const {
    error,
    isDisabled,
    setIsHashModificationField,
    isHashModificationSelectAndMultSelect,
  } = React.useContext(ClinicEditContext)

  /** @description Atualiza os dados digitados nos states */
  React.useEffect(() => {
    setAll(specialty, props.data.allSpecialtys)
    props.setSpecialty(specialty)
    if (isHashModificationSelectAndMultSelect) {
      setIsHashModificationField(true)
    }
  }, [specialty])

  /** @description Seta os dados nos campos quando esse componente é montado na tela. */
  React.useEffect(() => {
    setSpecialty(props.data.specialty)
  }, [props.data])

  /** @description Seta todas as especialidades no campo como selecionadas. */
  const setAll = (
    _specialty: MultiSelectOption[],
    allSpecialtys: MultiSelectOption[],
  ) => {
    if (_specialty) {
      const filter = _specialty.filter((item) => item.name === 'Todos')
      if (filter.length) {
        const all = allSpecialtys.filter((item) => item.name !== 'Todos')
        setSpecialty(all)
        return all
      } else {
        return _specialty
      }
    } else {
      setSpecialty(specialty)
    }
  }

  return (
    <Container>
      <h1>Especialidades</h1>
      <CustomMultSelect
        disabled={isDisabled}
        value={specialty}
        setValue={setSpecialty}
        options={props.data.allSpecialtys}
        hasError={!!error.specialty}
        messageError={error.specialty}
        variation="secondary"
      />
    </Container>
  )
}

export default Specilty
