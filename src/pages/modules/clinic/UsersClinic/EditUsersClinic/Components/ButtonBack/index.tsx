import React from 'react';
/** Components */
import Outline from '@/components/Button/Outline'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes'
/** Types */
import { DataToApiI } from '../../Types';

const ButtonBack: React.FC<{ dataToApi: DataToApiI }> = ({ dataToApi }) => {

  const history = useHistory()

  const onBack = () => {
    checkFields(dataToApi)
  }

  /**
   * @description Verifica se os campos estão preenchidos, se sim, abre um modal para o usuário. */
  const checkFields = (dataToApi: DataToApiI ) => {
    history.push(CLINIC_SEE_ALL_USERS)
  }

  return (
    <Outline small onClick={onBack}>Voltar</Outline>
  );
};

export default ButtonBack;
