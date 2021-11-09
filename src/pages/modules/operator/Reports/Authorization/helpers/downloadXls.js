export default (data) => {
  const buf = new Uint8Array(data).buffer
  const buftype = 'application/vnd.ms-excel;charset=utf-8'
  const blob = new Blob([buf], {
    type: buftype,
  })

  const urlDocument = URL.createObjectURL(blob)
  window.open(urlDocument)
}
