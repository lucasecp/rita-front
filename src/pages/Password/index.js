import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import InputMask from '@/components/Form/InputMask'
import RegisterLayout from '@/components/Layout/RegisterLayout'
import React from 'react'
import { Content } from './style'

function Password() {
  return (
    <>
      <RegisterLayout>
        <Content>
          <div>
            <h6>Preencha os campos abaixo para redefinir sua senha.</h6>
            <p>
              A senha deve conter letras, números e caracteres <br />
              especiais. Mínimo 6 dígitos.
            </p>

            <InputMask className="mt-2 mb-3" label="Digite sua nova senha*:" />

            <InputMask className="mt-2" label="Confirme sua nova senha*" />
            <footer>
              <OutlineButton>Voltar</OutlineButton>
              <ButtonPrimary>Confirmar</ButtonPrimary>
            </footer>
          </div>
        </Content>
      </RegisterLayout>
    </>
  )
}
export default Password
