import { Container, ButtonGroup } from './styles'
import React from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import OutlineButton from '@/components/Button/Outline'
import PrimaryButton from '@/components/Button/Primary'
import { useModal } from '@/hooks/useModal'
import Denied from '../messages/Denied'
import { SpecialistDataI } from '../Types'
import ConfirmAuthorizationStatus from '../messages/ConfirmAuthorizationStatus'
import { useAuth } from '@/hooks/login'

interface EditSpecialistProps {
  specialistData: SpecialistDataI
}

const EditSpecialist: React.FC<EditSpecialistProps> = ({ specialistData }) => {
  const history = useHistory()
  const { user } = useAuth()
  const { showMessage } = useModal()

  const onCancel = () => {
    history.push(CLINIC_SEE_ALL_SPECIALIST)
  }

  /** @description Abre o modal de confirmação */
  const confirmAuthorizationSpecialist = () => {
    showMessage(ConfirmAuthorizationStatus, { specialistData })
  }

  return (
    <Container>
      <div>
        <PersonalDatas personalDatas={specialistData?.personalDatas} />
        <ProfissionalDatas data={specialistData?.profissionalData} />
        <Specialty specialistSpecialtys={specialistData?.specialtys} />
        <Clinics specialistClinic={specialistData?.clinics} />
      </div>

      <ButtonGroup>
        <OutlineButton onClick={onCancel}>Voltar</OutlineButton>
        {specialistData?.status === 'P' && (
          <PrimaryButton
            onClick={() =>
              showMessage(Denied, {
                idDoctor: specialistData.id,
                idClinic: user.idClinica,
              })
            }
            variation="red"
          >
            Negar
          </PrimaryButton>
        )}
        {specialistData?.status === 'P' &&
          <PrimaryButton onClick={confirmAuthorizationSpecialist}>
            Autorizar
          </PrimaryButton>}
      </ButtonGroup>
    </Container>
  )
}

export default EditSpecialist
