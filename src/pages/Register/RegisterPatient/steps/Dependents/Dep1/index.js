import React, { useState } from 'react'
import InputMask from '@/components/Form/InputMask'
import { Col, Row } from 'react-bootstrap'
import InputText from '@/components/Form/InputText'
import SelectComponent from '@/components/Form/Select'
import OutlineButton from '@/components/Button/Outline'
import { BtnGroup, Content } from '../style'

const Dep1 = ({ setShowDep2, setShowDep1, showDep2 }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const dataIsEmptyOrNot = () =>
    name && email && gender && birthdate && phone && cpf

    const hanldeSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
    }
  return (
    <Content>
      <h3>Dependente 1</h3>
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
        {!submitted ? (
          <OutlineButton
            disabled={!dataIsEmptyOrNot()}
            variation="blue"
            className="mt-5"
          >
            Salvar
          </OutlineButton>
        ) : (
          <BtnGroup className="mt-5">
            <OutlineButton
              type="button"
              variation="red"
              onClick={() => setShowDep1(false)}
            >
              Remover Dependente
            </OutlineButton>
            {!showDep2 && (
              <OutlineButton type="button" onClick={() => setShowDep2(true)}>
                Adicionar Novo Dependente
              </OutlineButton>
            )}
          </BtnGroup>
        )}
      </form>
    </Content>
  )
}

export default Dep1
