import React from 'react';
/** Components */
import Outline from '@/components/Button/Outline'
import ModalConfirmation from '../../Messages/ModalConfirmation';
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'
import { useModal } from '@/hooks/useModal'
/** Types */
import { DataToApiI } from '../../Types';

const ButtonBack: React.FC<{ dataToApi: DataToApiI }> = ({ dataToApi }) => {

  const history = useHistory()
  const { showMessage } = useModal()

  const onBack = () => {
    checkFields(dataToApi)
  }

  /**
   * @description Verifica se os campos estão preenchidos, se sim, abre um modal para o usuário. */
  const checkFields = (dataToApi: DataToApiI ) => {
    const values = Object.values(dataToApi)
    if(values.filter(item => item.trim() !== '').length){
        showMessage(ModalConfirmation)
    }else {
      history.push(CLINIC_SEE_ALL_USERS)
    }
  }

  return (
    <Outline small onClick={onBack}>Voltar</Outline>
  );
};

export default ButtonBack;
