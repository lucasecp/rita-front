const downloadFile = (file, filename) => {
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(file)
  link.target = '_blank'
  link.download = `${+new Date() + filename || ''}.pdf`

  link.click()
  link.remove()
}

export default downloadFile
