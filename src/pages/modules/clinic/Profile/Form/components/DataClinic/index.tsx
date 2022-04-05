import React from 'react';
/** Types */
import { ClinicProfileI, DataClinicI } from '../../../types'
/** Stypes */
import { Container } from './styles'
/** Components */
import InputText from '@/components/Form/InputText';
import {Select} from '@/components/Form/Select';
/** Context */
import { ClinicEditContext } from '../../../Context/ClinicEditContext';
/** Constants */
import { status } from '../../../Constants'
import InputMask from '@/components/Form/InputMask';
/** Helper */
import {firstLetterCapitalize} from '@/helpers/firstLetterCapitalize'

interface FormClinicProfileI {
  data: ClinicProfileI,
  setDataClinic: (data: DataClinicI) => void
}

const DataClinic: React.FC<FormClinicProfileI> = (props: FormClinicProfileI) => {

  /** Context */
  const { isDisabled, error, setIsHashModificationField } = React.useContext(ClinicEditContext)
  /** State */
  const [description, setDescription] = React.useState('')
  const [razaoSocial, setRazaoSocial] = React.useState('')
  const [cnpj, setCnpj] = React.useState('')
  const [situacao, setSituacao] = React.useState('')
  const [phone, setPhone] = React.useState('')


  React.useEffect(() => {
    props.setDataClinic({ description, razaoSocial, cnpj, status: situacao, phone })
  }, [description, razaoSocial, cnpj, situacao, phone])

  React.useEffect(() => {
      setDescription(props.data.description)
      setRazaoSocial(props.data.razaoSocial)
      setCnpj(props.data.cnpj)
      setSituacao(props.data.status)
      setPhone(props.data.phone)
  },[props.data])

  console.log(error)

  /**
   * @description Função responsável por verificar se houve modificação nos campos e setar true em 'setIsHashModificationField' */
  const onChangeField = (event: any) => {
    let name = event.target.name
    if(name === 'description') setDescription(event.target.value)
    if(name === 'razaoSocial') setRazaoSocial(event.target.value)
    if(name === 'cnpj') setCnpj(event.target.value)
    if(name === 'situacao') setSituacao(event.target.value)
    if(name === 'phone') setPhone(event.target.value)
    setIsHashModificationField(true)
  }

  return (
    <Container>
      <h1>Dados da Clínica</h1>
       <section>
        <InputText
                   label='Nome Fantasia*'
                   onChange={onChangeField}
                   disabled={isDisabled}
                   value={description}
                   setValue={setDescription}
                   name='description'
                   hasError={!!error?.description}
                   msgError={error?.description}/>

        <InputText label='Razão Social*:'
                  disabled={isDisabled}
                  value={razaoSocial}
                  onChange={onChangeField}
                  name='razaoSocial'
                  setValue={setRazaoSocial}
                  hasError={!!error?.razaoSocial}
                  msgError={error?.razaoSocial}/>

        <section>
          <InputMask mask={'99.999.999/9999-99'}
                     label='CNPJ*:'
                     name='cnpj'
                     onChange={onChangeField}
                     disabled
                     value={cnpj}
                     setValue={setCnpj}
                     hasError={!!error?.cnpj}
                     msgError={error?.cnpj}/>

          <Select label='Situação*:'
                  disabled={isDisabled}
                  onChange={onChangeField}
                  name='situacao'
                  value={situacao}
                  options={status}
                  setValue={setSituacao}
                  hasError={!!error?.situacao}
                  msgError={error?.situacao}/>

          <InputMask
                     label='Telefone/Celular*:'
                     mask={'(99) 9999-9999'}
                     disabled={isDisabled}
                     onChange={onChangeField}
                     name='phone'
                     value={phone}
                     setValue={setPhone}
                     hasError={!!error?.phone}
                     msgError={error?.phone}/>
        </section>
       </section>
    </Container>
  );
};

export default DataClinic;
