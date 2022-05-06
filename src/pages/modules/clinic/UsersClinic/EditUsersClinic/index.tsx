import { DefaultLayout } from '@/components/Layout/DefaultLayout';
import React from 'react';
/** Components */
import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask';
import { InputEmail } from '@/components/smarts/InputEmail';
/** Styles */
import { Container } from './styles'
import ButtonEdit from './Components/ButtonEdit';
import ButtonBack from './Components/ButtonBack';
import ButtonSave from './Components/ButtonSave';
import ButtonCancel from './Components/ButtonCancel';
import { useMessage } from '@/hooks/useMessage'
/** Types */
import { DataToApiI, ValidationErrorFieldsI } from './Types';
/** Helpers */
import { typeAssistants } from '../EditUsersClinic/Contants'
import { useHistory, useLocation } from 'react-router';
import { CLINIC_SEE_ALL_USERS } from '@/routes/constants/namedRoutes/routes';
/** Services */
import apiAdmin from '@/services/apiAdmin'

const EditUsersClinic: React.FC = () => {

  const history = useHistory()
  const location = useLocation<{ idClinica: Number, idUsuario: Number }>()

  const [typeAssistant, setTypeAssistant] = React.useState('')
  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [dataToApi, setDataToApi] = React.useState<DataToApiI>()
  const [erros, setError] = React.useState<ValidationErrorFieldsI>({} as ValidationErrorFieldsI)
  const [isEditing, setIsEditing] = React.useState(false)
  const [errorMessage, sendErrorMessage] = useMessage()
  const [resetEmail, sendResetEmail] = useMessage()

  React.useEffect(() => {
    if (!location.state) {
      return history.push(CLINIC_SEE_ALL_USERS)
    }
    getUserClinicById()
  }, [])

  const getUserClinicById = async () => {
    const result = await apiAdmin.get(`/clinica/${location.state.idClinica}/usuario/${location.state.idUsuario}`)
    setCpf(result.data.usuario)
    setPhone(result.data.celular)
    setEmail(result.data.email)
    setName(result.data.nome)
    setTypeAssistant(result.data?.perfis[0]?.nome)
    sendResetEmail()
  }

  React.useEffect(() => {
    setDataToApi({
      typeAssistant, name, cpf, email, phone
    })
  }, [typeAssistant, name, cpf, email, phone])

  return (
    <DefaultLayout title='Clínica - Editar usuário'>
      <Container>
        <section>
          <section>
            <h2>Informações do Operador</h2>
            <Select label='Tipo de assistente*:'
              value={typeAssistant}
              labelDefaultOption="Selecione"
              options={typeAssistants}
              disabled={!isEditing}
              hasError={!!erros.typeAssistant}
              msgError={erros.typeAssistant}
              setValue={setTypeAssistant} />
          </section>
          <section>
            <InputMask
              label='CPF*:'
              mask={'999.999.999-99'}
              value={cpf}
              disabled
              hasError={!!erros.cpf}
              msgError={erros.cpf}
              setValue={setCpf} />
            <InputText label='Nome completo*:'
              maxLength={100}
              value={name}
              disabled={!isEditing}
              hasError={!!erros.name}
              msgError={erros.name}
              setValue={setName} />
          </section>
          <section>
            <InputMask
              mask={'(99)99999-9999'}
              label='Celular*:'
              value={phone}
              disabled={!isEditing}
              hasError={!!erros.phone}
              msgError={erros.phone}
              setValue={setPhone} />
            <InputEmail
              initialEmail={email}
              disabled={!isEditing}
              hasError={(hasError) => setError({ ...erros, email: hasError })}
              checkHasError={errorMessage}
              resetEmail={resetEmail}
              onGetEmail={setEmail} />
          </section>
          <section>
            {!isEditing ?
              <>
                <ButtonBack
                  dataToApi={dataToApi} />
                <ButtonEdit
                  setIsEditing={setIsEditing} />
              </> :

              <>
                <ButtonCancel
                  dataToApi={dataToApi}
                  setErrors={setError}
                  getUserClinicById={getUserClinicById}
                  setIsEditing={setIsEditing} />
                <ButtonSave
                  dataToApi={dataToApi}
                  erros={erros}
                  sendErrorMessage={sendErrorMessage}
                  setErrors={setError} />
              </>
            }
          </section>
        </section>
      </Container>
    </DefaultLayout>
  );
};

export default EditUsersClinic;