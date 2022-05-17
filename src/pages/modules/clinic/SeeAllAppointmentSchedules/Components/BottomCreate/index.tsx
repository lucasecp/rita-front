import React from 'react';
import Button from '@/components/Button/Primary'
import { useHistory } from 'react-router';
import { CLINIC_CREATE_SCHEDULING } from '@/routes/constants/namedRoutes/routes';

const ButtonCreate: React.FC = () => {
  const history = useHistory()
  return (
    <Button onClick={() => history.push(CLINIC_CREATE_SCHEDULING)}>Incluir</Button>
  );
};

export default ButtonCreate;
