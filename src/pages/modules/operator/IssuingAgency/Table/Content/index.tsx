import React from 'react'
import { Container, Status } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { OPERATOR_EDIT_SPRECIALTY } from '@/routes/constants/namedRoutes/routes'
import editIcon from '@/assets/icons/edit.svg'
import trashIcon from '@/assets/icons/trash.svg'
import { useModal } from '@/hooks/useModal'
import { useDeleteIssuingAgency } from './useDeleteIssuingAgency'
import { toast } from '@/styles/components/toastify'

const Content: React.FC<ContentProps> = ({
  issuingAgency,
  setIssuingAgency,
}) => {
  const history = useHistory()
  const { showSimple } = useModal()
  const { deleteIssuingAgency } = useDeleteIssuingAgency()

  const showStatus = (status: string | undefined) => {
    if (status === 'A') return 'Ativo'
    if (status === 'I') return 'Inativo'
  }

  const onDeleteIssuingAgency = async (
    id?: number,
    countSpecialist?: number,
    countSpecialt?: number,
  ) => {
    if (
      (countSpecialist && countSpecialist > 0) ||
      (countSpecialt && countSpecialt > 0)
    ) {
      return showSimple.warning(
        'Desassocie as especialidades e/ou os especialistas para poder efetuar exclusão deste orgão emissor',
      )
    }

    try {
      await deleteIssuingAgency(id)

      const updatedValues = issuingAgency.filter((spec) => spec.id !== id)

      setIssuingAgency(updatedValues)

      toast.success('Exclusão feita com sucesso')
    } catch (e) {
      showSimple.error('Erro ao excluir.')
    }
  }

  return (
    <Container>
      {issuingAgency?.map((issuingAgency, index) => (
        <ul
          key={index}
          // onClick={() =>
          //   history.push(OPERATOR_SEE_ALL_SPECIALTYS, { idClinic: clinic.id })
          // }
        >
          <li>{issuingAgency.issuingAgency}</li>
          <li>
            <CustomTooltip label={issuingAgency.specialist}>
              <div>{issuingAgency.specialist}</div>
            </CustomTooltip>
          </li>
          <li>{issuingAgency.countSpecialty}</li>
          <li>{issuingAgency.countSpecialist}</li>
          <Status type={showStatus(issuingAgency.status)}>
            <span>{showStatus(issuingAgency.status) || '-'}</span>
          </Status>
          <li>
            <CustomTooltip label="Editar">
              <button
              // onClick={() =>
              //   history.push(OPERATOR_EDIT_SPRECIALTY, {
              //     specialtyInfo: specialtys,
              //   })
              // }
              >
                <img src={editIcon} />
              </button>
            </CustomTooltip>

            <CustomTooltip label="Excluir">
              <button
                onClick={async () =>
                  await onDeleteIssuingAgency(
                    issuingAgency.id,
                    issuingAgency.countSpecialist,
                    issuingAgency.countSpecialty,
                  )
                }
              >
                <img src={trashIcon} />
              </button>
            </CustomTooltip>
          </li>
        </ul>
      ))}
      {issuingAgency.length < 1 && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
