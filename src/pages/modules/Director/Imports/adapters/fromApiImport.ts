interface ApiResponse {
  registrosComSucesso: number
  registrosComErro: number
  registrosComInativacao: number
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
  inativacoes: {
    nome: string
    cpf: string
  }[]
}

export interface StatusDataFromImport {
  success: {
    countSucessRegisters: number
    listSucessRegister: {
      line: string
      name: string
      cpf: string
      obs: string
    }[]
  }
  error: {
    countErrorsRegisters: number
    listErrorsRegister: {
      line: string
      name: string
      cpf: string
      error: string
    }[]
  }
  inactivate: {
    countInactivatesRegisters: number
    listInactivatesRegister: {
      name: string
      cpf: string
    }[]
  }
}

export const fromApiImport = (data: ApiResponse): StatusDataFromImport => {
  return {
    success: {
      countSucessRegisters: data.registrosComSucesso,
      listSucessRegister: data.sucessos.map((register) => ({
        line: register.linha,
        name: register.nome,
        cpf: register.cpf,
        obs: register.observacao,
      })),
    },
    error: {
      countErrorsRegisters: data.registrosComErro,
      listErrorsRegister: data.erros.map((register) => ({
        line: register.linha,
        name: register.nome,
        cpf: register.cpf,
        error: register.erro,
      })),
    },
    inactivate: {
      countInactivatesRegisters: data.registrosComInativacao,
      listInactivatesRegister: data.inativacoes.map((register) => ({
        name: register.nome,
        cpf: register.cpf,
      })),
    },
  }
}
