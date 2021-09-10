import RegisterLayout from '@/components/Layout/RegisterLayout';
import React from 'react';
import RegistrationData from './steps/RegistrationData';

const RegisterPatient = () => {
  return (
    <RegisterLayout>
          <RegistrationData/>
    </RegisterLayout>
  );
};


export default RegisterPatient;