import { User } from '../index'

export const userFromApi = (data: unknown): User => {
  console.log(data)

  return {
    name: 'Matheus Almeida',
    status: 'active',
    cpf: '15725158721',
    email: 'matheus@csptecnologia.com',
    phone: '22998881666',
    accessProfile: [
      { name: 'Gestor', id: 1 },
      { name: 'Validador', id: 2 },
      { name: 'Operador', id: 3 },
    ],
  }
}
