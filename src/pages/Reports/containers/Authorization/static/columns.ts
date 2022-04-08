export const COLUMNS_NAME = {
  REGISTER: 'Cadastro',
  NAME: 'Nome',
  CPF: 'CPF',
  EMAIL: 'Email',
  STATUS: 'Status',
  VALIDATOR: 'Validador',
  VALIDATION: 'Validação',
  DATAISVALID: 'Dados e documentos validados?',
  INCOME: 'Renda até 1,5 SM',
  REASON_FOR_NEGATIVE: 'Motivo da negativa',
}

export const columns = [
  { name: COLUMNS_NAME.REGISTER, id: 'cadastro' },
  { name: COLUMNS_NAME.NAME, id: 'nome' },
  { name: COLUMNS_NAME.CPF, id: 'cpf' },
  { name: COLUMNS_NAME.EMAIL, id: 'email' },
  { name: COLUMNS_NAME.STATUS, id: 'status' },
  { name: COLUMNS_NAME.VALIDATOR, id: 'validador' },
  { name: COLUMNS_NAME.VALIDATION, id: 'validacao' },
  { name: COLUMNS_NAME.DATAISVALID, id: 'dadosValidados' },
  { name: COLUMNS_NAME.INCOME, id: 'renda' },
  { name: COLUMNS_NAME.REASON_FOR_NEGATIVE, id: 'motivoNegativa' },
]

export const columnsTable = [
  { name: COLUMNS_NAME.REGISTER, id: 'dataCadastro' },
  { name: COLUMNS_NAME.NAME, id: 'nome' },
  { name: COLUMNS_NAME.CPF, id: 'cpf' },
  { name: COLUMNS_NAME.EMAIL, id: 'email' },
  { name: COLUMNS_NAME.STATUS, id: 'status' },
  { name: COLUMNS_NAME.VALIDATOR, id: 'validador' },
  { name: COLUMNS_NAME.VALIDATION, id: 'dataValidacao' },
  { name: COLUMNS_NAME.DATAISVALID, id: 'documentoOk' },
  { name: COLUMNS_NAME.INCOME, id: 'rendaBaixa' },
  { name: COLUMNS_NAME.REASON_FOR_NEGATIVE, id: 'motivoDocumento' },
]

export const status = [
  { name: 'Todos', id: 'All' },
  { name: 'Aprovado', id: 'A' },
  { name: 'Negado', id: 'N' },
]
