import RegisterLayout from '@/components/Layout/RegisterLayout';
import React from 'react';
import Adress from './steps/Adress';
import RegistrationData from './steps/RegistrationData';
import Document from './steps/Document'
const RegisterPatient = () => {
  return (
    <RegisterLayout>
          <RegistrationData/>
          <Adress/>
          <Document/>
    </RegisterLayout>
  );
};


export default RegisterPatient;