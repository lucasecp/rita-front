const downloadFile = (file) => {
  const date = new Date()
  const dateName =
    date.getFullYear() +
    ('00' + (date.getMonth() + 1)).slice(-2) +
    ('00' + date.getDate()).slice(-2) +
    '_' +
    ('00' + (date.getHours())).slice(-2) +
    ('00' + date.getMinutes()).slice(-2) +
    ('00' + date.getSeconds()).slice(-2) +
    '_' +
    'Autorizacoes'

  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(file)
  link.target = '_blank'
  link.download = `${dateName}.xls`

  link.click()
  link.remove()
}

export default downloadFile
