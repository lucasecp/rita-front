interface FromApiI {
  descricao: string
  uf:{
    sigla: string
  }

}

export const fromApi = (data: FromApiI[]): any[] => {
  const specialtys = {
    options: data.map((spec) => ({
      value: spec.descricao,
      label: spec.descricao,
    })),
  }

  return [specialtys]
}
