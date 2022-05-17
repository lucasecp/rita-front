import React from 'react';
import Button from '@/components/Button/Primary'
import { useHistory } from 'react-router';

const ButtonCreate: React.FC = () => {
  const history = useHistory()
  return (
    <Button onClick={() => history.push('')}>Incluir</Button>
  );
};

export default ButtonCreate;
