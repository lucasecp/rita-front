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
    switch (response.status) {
      case 404:
        // Actions to 404 Error

        break

      default:
        showSimple.error('Erro não tratado no Front!')

        break
    }
  }

  if (response.status.toString()[0] === '5') {
    showSimple.error('Erro no Servidor!')
  }
} finally {
  Loading.turnOff()
}
