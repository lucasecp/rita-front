import React from 'react'

import { Container } from './styles'

import tooltipIcon from '../../../../assets/icons/tooltip.png'
import ButtonOutline from '../../../../components/Button/Outline'
import api from '../../../../services/api'

function Document() {
  return (
    <Container>
      <h6>
        * Faça aqui o upload da sua foto segurando o documento de identificação
        que contenha o seu CPF
        <img src={tooltipIcon} alt="Icone que representa informação" />
      </h6>
      <h5>
        <button>Clique aqui</button> para ver as orientações sobre a foto
        segurando o documento de identificação.
      </h5>
      <ButtonOutline type="outline">Selecione o arquivo</ButtonOutline>
      <h6>
        * Faça aqui o upload do seu documento de identificação que contenha o
        seu CPF
        <img src={tooltipIcon} alt="Icone que representa informação" />
      </h6>
      <ButtonOutline type="outline">Selecione o arquivo</ButtonOutline>
      <h6>* Renda</h6>
      <select name="select">
        <option value="valor1" selected>
          Selecione a renda
        </option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
      <h6>
        * Faça aqui o upload do seu comprovante de renda
        <img src={tooltipIcon} alt="Icone que representa informação" />
      </h6>
      <h5>
        Você que não tem comprovante de renda, <button>clique aqui</button> para
        ter acesso ao CADÚNICO. Lá você terá acesso ao seu comprovante para
        concluir o seu cadastro.
      </h5>
      <ButtonOutline type="outline">Selecione o arquivo</ButtonOutline>
      <small>*Campos com preenchimento obrigatório</small>
      <div>
        <input type="checkbox" id="termsOfUse" name="termsOfUse" checked />
        <label htmlFor="termsOfUse">Termos de Uso</label>
        <img src="" alt="Icone que representa baixar" />
      </div>
      <footer>
        <button>
          <img src="" alt="Icone que representa voltar" />
          Voltar
        </button>
        <button>
          <img src="" alt="Icone que representa salvar" />
          Salvar
        </button>
      </footer>
      <span>
        Você somente poderá salvar os dados depois de aceitar os termos de uso
      </span>
    </Container>
  )
}

export default Document
