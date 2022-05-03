import { DefaultLayout } from '@/components/Layout/DefaultLayout';
import React from 'react';
/** Components */
import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask';
import { InputEmail } from '@/components/smarts/InputEmail';
/** Styles */
import { Container } from './styles'
import ButtonRegister from './Components/ButtonRegister';
import ButtonBack from './Components/ButtonBack';
/** Types */
import { DataToApiI, ValidationErrorFieldsI } from './Types';
/** Helpers */
import { typeAssistants } from '../CreateUsersClinic/Contants'
import { useMessage } from '@/hooks/useMessage';

const CreateUsersClinic: React.FC = () => {

  const [typeAssistant, setTypeAssistant] = React.useState('')
  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [dataToApi, setDataToApi] = React.useState<DataToApiI>()
  const [erros, setError] = React.useState<ValidationErrorFieldsI>({} as ValidationErrorFieldsI)
  const [errorMessage, sendErrorMessage] = useMessage()

  React.useEffect(() => {
    setDataToApi({
      typeAssistant, name, cpf, email, phone
    })
  }, [typeAssistant, name, cpf, email, phone])

  return (
    <DefaultLayout title='Clínica - Cadastro de usuários'>
      <Container>
        <section>
          <section>
            <Select label='Tipo de assistente*:'
              value={typeAssistant}
              labelDefaultOption="Selecione"
              options={typeAssistants}
              hasError={!!erros.typeAssistant}
              msgError={erros.typeAssistant}
              setValue={setTypeAssistant} />
          </section>
          <section>
            <InputMask
              label='CPF*:'
              mask={'999.999.999-99'}
              value={cpf}
              hasError={!!erros.cpf}
              msgError={erros.cpf}
              setValue={setCpf} />
            <InputText label='Nome completo*:'
              maxLength={100}
              value={name}
              hasError={!!erros.name}
              msgError={erros.name}
              setValue={setName} />
          </section>
          <section>
            <InputMask
              mask={'(99)99999-9999'}
              label='Celular*:'
              value={phone}
              hasError={!!erros.phone}
              msgError={erros.phone}
              setValue={setPhone} />
            <InputEmail
              label='E-mail*:'
              maxLength={200}
              initialEmail={email}
              hasError={(hasError) => setError({ ...erros, email: hasError })}
              checkHasError={errorMessage}
              onGetEmail={setEmail} />
          </section>
          <section>
            <ButtonBack dataToApi={dataToApi}/>
            <ButtonRegister
              dataToApi={dataToApi}
              erros={erros}
              sendErrorMessage={sendErrorMessage}
              setErrors={setError}/>
          </section>
        </section>
      </Container>
    </DefaultLayout>
  );
};

export default CreateUsersClinic;
