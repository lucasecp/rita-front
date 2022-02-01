export const formatStatus = (status: string): string => {
  const statusObject: { [x: string]: string } = {
    C: 'Cadastrado',
    A: 'Atualizado',
    N: 'Negado',
  }

  return statusObject[status]
}
