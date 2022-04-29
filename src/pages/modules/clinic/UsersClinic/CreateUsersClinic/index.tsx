import { DefaultLayout } from '@/components/Layout/DefaultLayout';
import React from 'react';
/** Components */
import { Select } from '@/components/Form/Select'
import InputText from '@/components/Form/InputText'
import InputMask from '@/components/Form/InputMask';
/** Styles */
import { Container } from './styles'
import ButtonCadastrar from './Components/ButtonCadastrar';
import ButtonVoltar from './Components/ButtonVoltar';
/** Types */
import { ValidationErrorFieldsI, DataToApiI } from './Types';
/** Helpers */
import { typeAssistants } from '../CreateUsersClinic/Contants'

const CreateUsersClinic: React.FC = () => {

  const [typeAssistant, setTypeAssistant] = React.useState('')
  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [dataToApi, setDataToApi] = React.useState<DataToApiI>()
  const [erros, setError] = React.useState<ValidationErrorFieldsI>({} as ValidationErrorFieldsI)

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
              hasError={!!erros.hasError && erros.field === 'typeAssistant'}
              msgError={erros.field === 'typeAssistant' && erros.msgError}
              setValue={setTypeAssistant} />
          </section>
          <section>
            <InputMask
              label='CPF*:'
              mask={'999.999.999-99'}
              value={cpf}
              hasError={!!erros.hasError && erros.field === 'cpf'}
              msgError={erros.field === 'cpf' && erros.msgError}
              setValue={setCpf} />
            <InputText label='Nome completo*:'
              maxLength={100}
              value={name}
              hasError={!!erros.hasError && erros.field === 'name'}
              msgError={erros.field === 'name' && erros.msgError}
              setValue={setName} />
          </section>
          <section>
            <InputMask
              mask={'(99) 99999-9999'}
              label='Celular*:'
              value={phone}
              hasError={!!erros.hasError && erros.field === 'phone'}
              msgError={erros.field === 'phone' && erros.msgError}
              setValue={setPhone} />
            <InputText
              label='E-mail*:'
              maxLength={200}
              value={email}
              setValue={setEmail}
              hasError={!!erros.hasError && erros.field === 'email'}
              msgError={erros.field === 'email' && erros.msgError} />
          </section>
          <section>
            <ButtonVoltar dataToApi={dataToApi}>Voltar</ButtonVoltar>
            <ButtonCadastrar dataToApi={dataToApi} setErrors={setError}>Cadastrar</ButtonCadastrar>
          </section>
        </section>
      </Container>
    </DefaultLayout>
  );
};

export default CreateUsersClinic;
