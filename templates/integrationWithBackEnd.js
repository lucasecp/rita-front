try {
  Loading.turnOn()

  const response = await api.method('/route')

  // remove when finished configuring API responses
  console.log(response)

  if (response.status === 200) {
    if (response.data.mensagem === 'Message From Api') {
      // Actions
    }
  }
} catch ({ response }) {
  // remove when finished configuring API responses
  console.log(response)

  if (response.status.toString()[0] === '4') {
    if (response.status === 404) {
      // Actions to 404 Error
    }
  }
} finally {
  Loading.turnOff()
}
