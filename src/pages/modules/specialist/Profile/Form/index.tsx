import React from 'react'
import SpecialistInfo from '../components/SpecialistInfo'
import { Specialtys } from '../components/Specialtys'
import { Clinics } from '../components/Clinics'
import { Container } from './styles'
import ButtonPrimary from '../../../../../components/Button/Primary/index'
import { DataSpecialistI } from '../Types/index'

interface FormProps {
  data: DataSpecialistI
}

const Form: React.FC<FormProps> = ({ data }) => {
  return (
    <Container>
      <SpecialistInfo data={data.specialistInfo} />
      <Specialtys specialistSpecialtys={data?.specialtys}/>
      <Clinics specialistClinic={data?.clinics}/>
      <footer>
        <ButtonPrimary>Editar</ButtonPrimary>
      </footer>
    </Container>
  )
}

export default Form
