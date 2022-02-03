import React from 'react'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'
import Messages from './Messages'

const Content: React.FC<ContentProps> = ({ dependents, setStep }) => {
  const { showMessage } = useModal()

  const Disassociate = (
    idDependent?: string,
    IdHolder?: string,
    isAMinor?: boolean,
  ) => {
    showMessage(Messages, {
      idDependent,
      IdHolder,
      isAMinor,
      setStep,
    })
  }

  return (
    <Container>
      {dependents?.dependents?.map((dependent, index) => (
        <ul key={index}>
          <li>{dependent.cpf}</li>
          <li>
            <CustomTooltip label={dependent.name}>
              <div>{dependent.name}</div>
            </CustomTooltip>
          </li>
          <li>
            <OutlineButton
              medium
              onClick={() =>
                Disassociate(
                  dependent.id,
                  dependents.holder.id,
                  dependent.isAMinor,
                )
              }
            >
              Desassociar
            </OutlineButton>
          </li>
        </ul>
      ))}
      {dependents?.dependents?.length === 0 && (
        <h2>Nenhum resultado encontrado</h2>
      )}
    </Container>
  )
}

export default Content
