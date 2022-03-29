import { MultiSelectOption } from '@/components/Form/MultSelect'

interface Services {
  id: number
  nome: string
}

export default (services: Services[]): MultiSelectOption[] => {
  return services.map((service) => {
    return {
      id: service.id,
      name: service.nome,
    }
  })
}
