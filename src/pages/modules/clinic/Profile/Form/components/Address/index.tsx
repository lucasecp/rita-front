import React from 'react';
/** Types */
import { ClinicProfileI, AddressClinicI } from '../../../types'
/** Stypes */
import { Container } from './styles'
/** Components */
import InputText from '@/components/Form/InputText';
/** Context */
import { ClinicEditContext } from '../../../Context/ClinicEditContext'
import InputMask from '@/components/Form/InputMask';
import SelectCity from '@/components/smarts/SelectCity'
import SelectUf from '@/components/smarts/SelectUf'

interface FormClinicProfileI {
  data: ClinicProfileI,
  setAddress: (data: AddressClinicI) => void
}

const ResponsibleTecnic: React.FC<FormClinicProfileI> = (props: FormClinicProfileI) => {

  /** States */
  const [cep, setCep] = React.useState('')
  const [ufId, setUfId] = React.useState('')
  const [ufLabel, setUfLabel] = React.useState('')
  const [city, setCity] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [district, setDistrict] = React.useState('')
  const [complement, setComplement] = React.useState('')
  /** Context */
  const { error, isDisabled, setIsHashModificationField } = React.useContext(ClinicEditContext)

  /** @description Atualiza os dados digitados nos states */
  React.useEffect(() => {
    props.setAddress({cep, uf: ufLabel, city, address, number, district, complement})
  }, [cep, ufId, city, address, number, district, complement])

  /** @description Seta os dados nos campos quando esse componente é montado na tela. */
  React.useEffect(() => {
    setCep(props.data.cep)
    setUfId(props.data.uf)
    setCity(props.data.city)
    setAddress(props.data.address)
    setNumber(props.data.number)
    setDistrict(props.data.district)
    setComplement(props.data.complement)
  }, [props.data])

  /**
   * @description Função responsável por verificar se houve modificação nos campos e setar true em 'setIsHashModificationField' */
   const onChangeField = (event: any) => {
    let name = event.target.name
    if(name === 'cep') setCep(event.target.value)
    if(name === 'ufId') setUfId(event.target.value)
    if(name === 'city') setCity(event.target.value)
    if(name === 'address') setAddress(event.target.value)
    if(name === 'number') setNumber(event.target.value)
    if(name === 'district') setDistrict(event.target.value)
    if(name === 'complement') setComplement(event.target.value)
    setIsHashModificationField(true)
  }

  return (
    <Container>
      <h1>Endereço</h1>
          <section>
            <InputMask label='CEP*'
                       mask='99.999-999'
                       disabled={isDisabled}
                       onChange={onChangeField}
                       name='cep'
                       value={cep}
                       setValue={setCep}
                       hasError={!!error.cep}
                       msgError={error.cep}/>
            <SelectUf label='UF*:'
                      disabled={isDisabled}
                      uf={ufId}
                      setUf={setUfId}
                      setUfToApi={setUfLabel}/>
            <SelectCity disabled={isDisabled} city={city} setCity={setCity} uf={ufId}/>
          </section>
          <section>
            <InputText label='Endereço*:'
                       disabled={isDisabled}
                       onChange={onChangeField}
                       name='address'
                       value={address}
                       setValue={setAddress}
                       hasError={!!error.address}
                       msgError={error.address}/>
            <InputText label='Número*:'
                       disabled={isDisabled}
                       onChange={onChangeField}
                       name='number'
                       value={number}
                       setValue={setNumber}
                       hasError={!!error.number}
                       msgError={error.number}/>
          </section>
          <section>
            <InputText label='Bairro*:'
                       disabled={isDisabled}
                       onChange={onChangeField}
                       name='district'
                       value={district}
                       setValue={setDistrict}
                       hasError={!!error.district}
                       msgError={error.district}/>
            <InputText label='Complemento*:'
                       disabled={isDisabled}
                       onChange={onChangeField}
                       name='complement'
                       value={complement}
                       setValue={setComplement}
                       hasError={!!error.complement}
                       msgError={error.complement}/>
          </section>
    </Container>
  );
};

export default ResponsibleTecnic;
