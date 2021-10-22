const validateTypeFile = (file) => {
  const fileType = file.type.split('/')[1]

  return !!(
    fileType === 'jpg' ||
    fileType === 'jpeg' ||
    fileType === 'png' ||
    fileType === 'pdf'
  ) && file.name.split('.')[1] !== 'jfif'
}

export default validateTypeFile
