import proofAddressImage from '@/assets/img/proof-address.png'

import OutlineButton from '@/components/Button/Outline'
import { InputFile } from '@/components/Form/InputFile/'

import { Container } from './styles'

function InstructionsAddress({ onGetFile }) {
  return (
    <Container>
      <h3>Faça o envio de uma foto do seu comprovante de residência</h3>
      <div>
        <section>
          <img src={proofAddressImage} />
        </section>
        <aside>
          <div id="box-information">
            <h4>Como tirar a foto:</h4>
            <ul>
              <li>Vá a um local seguro e iluminado;</li>
              <li>O documento deve aparecer por inteiro;</li>
              <li>Verifique se a imagem ficou nítida;</li>
            </ul>
          </div>
          <InputFile accept=".png, .jpg, .jpeg, .pdf" setValue={onGetFile}>
            <OutlineButton small variation="blue">
              Selecionar Arquivo
            </OutlineButton>
          </InputFile>
          <div>
            <span>Permitido apenas o envio de 1 arquivo</span>
            <span>Tipos de arquivos aceitos: jpg, jpeg, png ou pdf.</span>
            <span>Tamanho máximo do arquivo: 10MB</span>
          </div>
        </aside>
      </div>
    </Container>
  )
}

export default InstructionsAddress
