import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container, TextGroup } from './style'
const Form = ({setTerms,setShowModal}) => {
  const hanldeAcceptTerms = () =>{
    setTerms(true)
    setShowModal(false)
  }
  return (
    <Container>
      <h2>Dependente</h2>
      <form method="POST" onSubmit={hanldeSubmit}>
        <Row>
          <Col md="6">
            <InputText label="Nome Completo:" value={name} setValue={setName} />
          </Col>
          <Col md="6">
            <InputMask
              label="CPF:"
              mask="###.###.###-##"
              value={cpf}
              setValue={setCpf}
            />
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="Data de Nascimento:"
              mask="##/##/####"
              value={birthdate}
              setValue={setBirthdate}
            />
          </Col>
          <Col md="6" className="mt-4">
            <SelectComponent
              label="Gênero:"
              labeDefaultOption="selecione"
              options={['masculino', 'feminino']}
              setValue={setGender}
              name='genderDep1'
            />
          </Col>
          <Col md="6" className="mt-4">
            <InputMask
              label="Celular:"
              mask="(##)#####-####"
              value={phone}
              setValue={setPhone}
            />
          </Col>

          <Col md="6" className="mt-4">
            <InputText label="E-mail:" value={email} setValue={setEmail} />
          </Col>
        </Row>

          <BtnGroup className="mt-5">
           <OutlineButton
          </BtnGroup>

      </form>
      <ButtonPrimary onClick={hanldeAcceptTerms}></ButtonPrimary>
    </Container>
  )
}

export default Form
