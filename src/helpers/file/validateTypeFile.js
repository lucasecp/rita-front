const validateTypeFile = (file) => {
  const fileType = file.type.split('/')[1]

  return !!(
    fileType === 'jpg' ||
    fileType === 'jpeg' ||
    fileType === 'png' ||
    fileType === 'pdf'
  )
}
export default validateTypeFile
