import React from 'react';
import { useAuthPatient } from '@/context/login/patient'


const user = (muduleRoute) => {
  const { user: patient } = useAuthPatient()
  const isPatient = patient.module === muduleRoute
  const userLoggedin = isPatient

};


export default user;