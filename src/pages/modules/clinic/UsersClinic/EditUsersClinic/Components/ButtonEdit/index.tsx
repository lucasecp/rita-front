import React from 'react'
/** Components */
import Primary from '@/components/Button/Primary'

interface ButtonCadastrarProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonEdit: React.FC<ButtonCadastrarProps> = ({
  setIsEditing
}) => {

  const onEdit = async () => {
    setIsEditing(true)
  }

  return (
    <Primary small onClick={onEdit}>
      Editar
    </Primary>
  )
}

export default ButtonEdit
