interface Services {
  id: number
  nome: string
}

export default (services: Services) => {
  return services.map((service) => {
    return {
      value: service.id,
      name: service.nome,
    }
  })
}
