import React from 'react'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import { useHistory } from 'react-router-dom'
import { OPERATOR_EDIT_SPRECIALTY } from '@/routes/constants/namedRoutes/routes'
import editIcon from '@/assets/icons/edit.svg'
import trashIcon from '@/assets/icons/trash.svg'
import { useModal } from '@/hooks/useModal'
import { useDeleteSpecialty } from './useDeleteSpecialty'
import { toast } from '@/styles/components/toastify'

const Content: React.FC<ContentProps> = ({ specialtys, setSpecialtys }) => {
  const history = useHistory()
  const { showSimple } = useModal()
  const { deleteSpecialty } = useDeleteSpecialty()

  const onDeleteSpecialty = async (id?: number, count?: number) => {

    if (count && count > 0) {
      return showSimple.warning(
        'Desassocie as especialidades para poder efetuar exclusão deste tipo de especialidade',
      )
    }

    try {
      await deleteSpecialty(id)

      const updatedValues = specialtys.data?.filter((spec) => spec.id !== id)

      setSpecialtys({ total: specialtys.total, data: updatedValues })

      toast.success('exclusão feita com sucesso')
    } catch (e) {
      showSimple.error('Erro ao excluir.')
    }
  }

  return (
    <Container>
      {specialtys?.data?.map((specialtys, index) => (
        <ul
          key={index}
          // onClick={() =>
          //   history.push(OPERATOR_SEE_ALL_SPECIALTYS, { idClinic: clinic.id })
          // }
        >
          <li>{specialtys.code}</li>
          <li>
            <CustomTooltip label={specialtys.type}>
              <div>{specialtys.type}</div>
            </CustomTooltip>
          </li>
          <li>{specialtys.count}</li>
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
                  await onDeleteSpecialty(specialtys.id, specialtys.count)
                }
              >
                <img src={trashIcon} />
              </button>
            </CustomTooltip>
          </li>
        </ul>
      ))}
      {!specialtys.total && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
