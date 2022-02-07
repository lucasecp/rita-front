interface ApiResponse {
  registrosComSucesso: number
  registrosComErro: number
  sucessos: {
    linha: string
    nome: string
    cpf: string
    observacao: string
  }[]
  erros: {
    linha: string
    nome: string
    cpf: string
    erro: string
  }[]
}

export interface FromApiResponse {
  countSucessRegisters: number
  countErrorsRegister: number
  listSucessRegister: {
    line: string
    name: string
    cpf: string
    obs: string
  }[]
  listErrorsRegister: {
    line: string
    name: string
    cpf: string
    error: string
  }[]
}

export const fromApiImport = (data: ApiResponse): FromApiResponse => {
  return {
    countSucessRegisters: data.registrosComSucesso,
    countErrorsRegister: data.registrosComErro,
    listSucessRegister: data.sucessos.map((register) => ({
      line: register.linha,
      name: register.nome,
      cpf: register.cpf,
      obs: register.observacao,
    })),
    listErrorsRegister: data.erros.map((register) => ({
      line: register.linha,
      name: register.nome,
      cpf: register.cpf,
      error: register.erro,
    })),
  }
}
